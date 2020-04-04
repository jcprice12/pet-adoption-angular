import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

class PasswordsDoNotMatchErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control.parent.hasError('passwordsDoNotMatch') && control.touched;
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements FormComponent {
  readonly passwordsDoNotMatchErrorMatcher = new PasswordsDoNotMatchErrorMatcher();
  readonly minUsernameLength = 5;
  readonly minPasswordLength = 5;
  readonly signUpForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minUsernameLength),
    ]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(this.minPasswordLength),
        ]),
        confirmPassword: new FormControl(),
      },
      this.passwordMatcherValidator
    ),
  });

  constructor(private readonly authService: AuthService) { }

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
