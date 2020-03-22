import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

class PasswordsDoNotMatchErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control.parent.hasError('passwordsDoNotMatch') && control.touched;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
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
