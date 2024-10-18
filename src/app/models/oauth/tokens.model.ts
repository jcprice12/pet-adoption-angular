import { IdTokenPayload } from './id-token-payload.model';

export interface Tokens {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
  id_token?: string;
  id_token_payload?: IdTokenPayload;
}
