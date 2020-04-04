import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '../form.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements FormComponent {
  readonly minUsernameLength = 5;
  readonly minPasswordLength = 5;
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(this.minUsernameLength),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(this.minPasswordLength),
      Validators.required,
    ]),
  });

  constructor(private readonly authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe();
  }
}
