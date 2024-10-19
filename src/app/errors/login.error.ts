import { UIError } from './ui.error';

export class LoginError extends UIError {
  constructor(message: string, cause?: Error, description?: string) {
    super(
      description || "Something didn't quite line up. Please try again later.",
      message,
      cause
    );
  }
}
