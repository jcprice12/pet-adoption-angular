import { LoginError } from './login.error';

export class AuthorizeCallbackError extends LoginError {
  constructor(public readonly code: string) {
    let description;
    if (code === 'consent_required') {
      description = 'You must provide consent to complete your login process.';
    }
    super(
      `Error occurred during authorize process: ${code}`,
      undefined,
      description
    );
  }
}
