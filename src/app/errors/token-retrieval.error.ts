import { LoginError } from './login.error';

export class TokenRetrievalError extends LoginError {
  constructor(cause: Error) {
    super('An error occurred while retrieving tokens', cause);
  }
}
