import { LoginError } from './login.error';

export class InvalidJwkError extends LoginError {
  constructor(cause: Error) {
    super('The JWKS was invalid.', cause);
  }
}
