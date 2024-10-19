import { LoginError } from './login.error';

export class AuthorizeError extends LoginError {
  constructor(cause: Error) {
    super(
      'An error occurred while initiating the authorization process',
      cause
    );
  }
}
