import { CausedByError } from './caused-by.error';

export class UIError extends CausedByError {
  constructor(
    public readonly description: string,
    message?: string,
    cause?: Error
  ) {
    super(message || description, cause);
  }
}
