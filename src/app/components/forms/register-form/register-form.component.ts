import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormComponent } from '../form.component';
import { UserNamePasswordFormComponent } from '../username-password-form.component';

class PasswordsDoNotMatchErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control.parent.hasError('passwordsDoNotMatch') && control.touched;
  }
}

@Component({
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent extends UserNamePasswordFormComponent
  implements FormComponent {
  readonly passwordsDoNotMatchErrorMatcher = new PasswordsDoNotMatchErrorMatcher();
  readonly signUpForm = new FormGroup({
    username: this.usernameFormControl,
    passwords: new FormGroup(
      {
        password: this.passwordFormControl,
        confirmPassword: new FormControl(),
      },
      this.passwordMatcherValidator
    ),
  });

  constructor(private readonly authService: AuthService) {
    super();
  }

  onSubmit(): void {
    this.authService
      .register({
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.passwords.password,
      })
      .subscribe();
  }

  passwordMatcherValidator(
    passwordsFormGroup: FormGroup
  ): ValidationErrors | null {
    return passwordsFormGroup.value.password ===
      passwordsFormGroup.value.confirmPassword
      ? null
      : {
          passwordsDoNotMatch: true,
        };
  }
}
