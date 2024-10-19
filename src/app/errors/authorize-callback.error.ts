import { LoginError } from './login.error';

export class AuthorizeCallbackError extends LoginError {
  constructor(code: string) {
    super(`Error occurred during authorize process: ${code}`);
  }
}
