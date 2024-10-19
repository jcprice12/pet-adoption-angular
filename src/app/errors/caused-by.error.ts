export class CausedByError extends Error {
  constructor(
    message: string,
    public readonly cause?: Error
  ) {
    super(message);
  }
}
