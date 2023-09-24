import { Injectable } from '@nestjs/common';
import {
  CreateCredentialsResponseDataDto,
  CreateDidResponseDataDto,
  CreateProfileResponseDataDto,
} from '../common/dto/dock.dto';
import axios from 'axios';

const { DOCK_API_TOKEN, DOCK_API_URL } = process.env;

@Injectable()
export class VendorService {
  constructor() {}

  async getDockCredentialsRequestClaimsResponse() {
    return {
      id: '55ed1c5f-652a-45d8-a888-61d05b29b17e',
      qrUrl:
        'https://creds-testnet.dock.io/claim/55ed1c5f-652a-45d8-a888-61d05b29b17e?protocol=iden3comm&n=f3881499-c3e2-4b51-ab67-90cbd14327f8',
      created: '2023-09-15T09:56:08.273Z',
      updated: '2023-09-15T09:56:08.273Z',
      singleUse: true,
      claimMap: { id: 'id' },
      issuer:
        'did:polygonid:polygon:mumbai:2qFuT3DDK6M7k8hYozPZMd8ouN8nY2sJ8Fivriw5YQ',
      protocol: 'iden3comm',
      credentialOptions: {
        anchor: false,
        persist: false,
        credential: {
          name: 'KYCAgeCredential',
          type: [Array],
          issuer:
            'did:polygonid:polygon:mumbai:2qFuT3DDK6M7k8hYozPZMd8ouN8nY2sJ8Fivriw5YQ',
          schema:
            'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v2.json',
          subject: [Object],
        },
        distribute: true,
        emailMessage: '',
      },
    };
  }

  async createDockCredentialsRequestClaims(member: { name: string }) {
    console.log('createCredential, member', member);
    const axiosHeaders = {
      headers: {
        'DOCK-API-TOKEN': DOCK_API_TOKEN,
      },
    };

    const createDidBody = {
      keyType: 'bjj',
      type: 'polygonid',
    };
    const { data: createDidResponseData } =
      await axios.post<CreateDidResponseDataDto>(
        `${DOCK_API_URL}/dids`,
        createDidBody,
        axiosHeaders,
      );

    const createProfileBody = {
      name: `${member.name} KYC Polygon ID DID`,
      did: createDidResponseData.did,
      description: 'llm hub member KYC did',
    };
    await axios.post<CreateProfileResponseDataDto>(
      `${DOCK_API_URL}/profiles`,
      createProfileBody,
      axiosHeaders,
    );

    const createCredentialsBody = {
      schema:
        'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v2.json',
      claims: ['id'],
      credentialOptions: {
        anchor: false,
        persist: false,
        emailMessage: '',
        credential: {
          schema:
            'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/KYCAgeCredential-v2.json',
          issuer: createDidResponseData.did,
          name: 'KYCAgeCredential',
          type: ['VerifiableCredential', 'KYCAgeCredential'],
          subject: {
            birthday: 20230928,
            documentType: 3324,
          },
        },
        distribute: true,
      },
    };
    const { data: createCredentialsResponseData } =
      await axios.post<CreateCredentialsResponseDataDto>(
        `${DOCK_API_URL}/credentials/request-claims`,
        createCredentialsBody,
        axiosHeaders,
      );

    console.log(
      'createCredential, createCredentialsResponseData',
      createCredentialsResponseData,
    );

    return createCredentialsResponseData;
  }
}
