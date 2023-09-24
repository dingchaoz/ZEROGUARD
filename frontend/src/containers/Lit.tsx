const client = new LitJsSdk.LitNodeClient();
const chain = "ethereum";

class Lit {
    private litNodeClient
  
    async connect() {
      await client.connect()
      this.litNodeClient = client
    }

    async encrypt(message: string) {
        if (!this.litNodeClient) {
          await this.connect()
        }
    
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
        const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(message)
    
        const encryptedSymmetricKey = await window.litNodeClient.saveEncryptionKey({
          accessControlConditions,
          symmetricKey,
          authSig,
          chain,
        })
    
        return {
          encryptedString,
          encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16")
        }
      }
    
      async decrypt(encryptedString: string, encryptedSymmetricKey: string) {
        if (!this.litNodeClient) {
          await this.connect()
        }
    
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
        const symmetricKey = await this.litNodeClient.getEncryptionKey({
          accessControlConditions,
          toDecrypt: encryptedSymmetricKey,
          chain,
          authSig
        })
    
        const decryptedString = await LitJsSdk.decryptString(
          encryptedString,
          symmetricKey
        );
    
      return { decryptedString }
      }
    
      async encrypt() {
        const ipfsCid = await LitJsSdk.encryptToIpfs({
          authSig,
          accessControlConditions,
          chain,
          string: "Encrypt & store on IPFS seamlessly with Lit 😎",
        //   file, // If you want to encrypt a file instead of a string
          litNodeClient: this.litNodeClient,
          infuraId: 'YOUR INFURA PROJECT ID',
          infuraSecretKey: 'YOUR INFURA API-SECRET-KEY',
        });
    }
    
    async decrypt(ipfsCid) {
        const decryptedString = await LitJsSdk.decryptFromIpfs({
          authSig,
          ipfsCid, // This is returned from the above encryption
          litNodeClient: this.litNodeClient,
        });
    }
  }
  
  export default new Lit()

  const accessControlConditions = [
    {
      contractAddress: "",
      standardContractType: "",
      chain: "ethereum",
      method: "eth_getBalance",
      parameters: [":userAddress", "latest"],
      returnValueTest: {
        comparator: ">=",
        value: "1000000000000", // 0.000001 ETH
      },
    },
  ];

