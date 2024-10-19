import { LoginError } from './login.error';

export class InvalidStateError extends LoginError {
  constructor() {
    super(
      'The state that was saved locally does not match the state returned by the auth server.'
    );
  }
}
