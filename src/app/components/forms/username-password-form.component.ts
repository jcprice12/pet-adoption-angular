import { UntypedFormControl, Validators } from '@angular/forms';

export abstract class UserNamePasswordFormComponent {
  readonly minUsernameLength = 5;
  readonly minPasswordLength = 5;
  readonly usernameFormControl = new UntypedFormControl('', [
    Validators.minLength(this.minUsernameLength),
    Validators.required,
  ]);
  readonly passwordFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(this.minPasswordLength),
  ]);
}
