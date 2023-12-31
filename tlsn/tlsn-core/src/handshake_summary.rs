use mpz_core::{commit::Decommitment, hash::Hash};
use serde::{Deserialize, Serialize};
use tls_core::{handshake::HandshakeData, key::PublicKey, msgs::handshake::ServerECDHParams};

use crate::error::Error;

#[cfg(feature = "tracing")]
use tracing::instrument;

/// Handshake summary is part of the session header signed by the Notary
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HandshakeSummary {
    /// time when Notary signed the session header
    // TODO: we can change this to be the time when the Notary started the TLS handshake 2PC
    time: u64,
    /// server ephemeral public key
    server_public_key: PublicKey,
    /// Prover's commitment to [crate::handshake_data::HandshakeData]
    handshake_commitment: Hash,
}

impl HandshakeSummary {
    /// Creates a new HandshakeSummary
    pub fn new(time: u64, ephemeral_ec_pubkey: PublicKey, handshake_commitment: Hash) -> Self {
        Self {
            time,
            server_public_key: ephemeral_ec_pubkey,
            handshake_commitment,
        }
    }

    /// Returns the time
    pub fn time(&self) -> u64 {
        self.time
    }

    /// Returns the server ephemeral public key
    pub fn server_public_key(&self) -> &PublicKey {
        &self.server_public_key
    }

    /// Returns commitment to the handshake data
    pub fn handshake_commitment(&self) -> &Hash {
        &self.handshake_commitment
    }

    /// Verifies that the provided handshake data matches this handshake summary
    #[cfg_attr(
        feature = "tracing",
        instrument(level = "debug", skip(self, data), err)
    )]
    pub fn verify(&self, data: &Decommitment<HandshakeData>) -> Result<(), Error> {
        // Verify the handshake data matches the commitment in the session header
        data.verify(&self.handshake_commitment)
            .map_err(|_| Error::ValidationError)?;

        let ecdh_params = tls_core::suites::tls12::decode_ecdh_params::<ServerECDHParams>(
            data.data().server_kx_details().kx_params(),
        )
        .ok_or(Error::ValidationError)?;

        let server_public_key =
            PublicKey::new(ecdh_params.curve_params.named_group, &ecdh_params.public.0);

        // Ephemeral pubkey must match the one which the Notary signed
        if server_public_key != self.server_public_key {
            return Err(Error::ValidationError);
        }

        Ok(())
    }
}
