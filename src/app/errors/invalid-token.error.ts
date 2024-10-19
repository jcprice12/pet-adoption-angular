import { LoginError } from './login.error';

export class InvalidTokenError extends LoginError {
  constructor(cause: Error) {
    super('A token did not pass verification', cause);
  }
}
