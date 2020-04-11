import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormComponent } from '../form.component';
import { UserNamePasswordFormComponent } from '../username-password-form.component';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent extends UserNamePasswordFormComponent
  implements FormComponent {
  readonly loginForm = new FormGroup({
    username: this.usernameFormControl,
    password: this.passwordFormControl,
  });

  constructor(private readonly authService: AuthService) {
    super();
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe();
  }
}
