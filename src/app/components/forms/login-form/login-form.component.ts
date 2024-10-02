import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FormComponent } from '../form.component';
import { UserNamePasswordFormComponent } from '../username-password-form.component';

@Component({
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent extends UserNamePasswordFormComponent
  implements FormComponent {
  readonly loginForm = new UntypedFormGroup({
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
