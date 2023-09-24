export class CreateDidResponseDataDto {
  did: string;
  controller: string;
  id: string;
  data: {
    did: string;
    controller: string;
  };
}

export class CreateProfileResponseDataDto {
  did: string;
  name: string;
  description: string;
  type: string;
}

export class CreateCredentialsResponseDataDto {
  id: string;
  qrUrl: string;
  created: string;
  updated: string;
  singleUse: boolean;
  claimMap: {
    id: string;
  };
  issuer: string;
  protocol: string;
  credentialOptions: {
    anchor: boolean;
    persist: boolean;
    credential: {
      name: string;
      type: string[];
      issuer: string;
      schema: string;
      subject: {
        birthday: number;
        documentType: number;
      };
    };
    distribute: boolean;
    emailMessage: string;
  };
}
