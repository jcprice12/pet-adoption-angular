import { UIError } from './ui.error';

export class LoginError extends UIError {
  constructor(message: string, cause?: Error) {
    super(
      "Something didn't quite line up while logging you in. Please try again later.",
      message,
      cause
    );
  }
}
