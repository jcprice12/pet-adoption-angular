export class CodedError extends Error {
  constructor(public readonly code: string) {
    super(code);
  }
}
