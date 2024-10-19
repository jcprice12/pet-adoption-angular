import { UIError } from './ui.error';

export class UserInfoError extends UIError {
  constructor(message: string) {
    super(
      'Could not retrieve your profile information. Please try again later.',
      message
    );
  }
}
