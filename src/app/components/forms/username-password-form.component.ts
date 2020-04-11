import { FormControl, Validators } from '@angular/forms';

export abstract class UserNamePasswordFormComponent {
  readonly minUsernameLength = 5;
  readonly minPasswordLength = 5;
  readonly usernameFormControl = new FormControl('', [
    Validators.minLength(this.minUsernameLength),
    Validators.required,
  ]);
  readonly passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPasswordLength),
  ]);
}
