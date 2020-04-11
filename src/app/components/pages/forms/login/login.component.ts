import { Component } from '@angular/core';
import { FormComponentWrapper } from 'src/app/models/ui/form-component-wrapper.model';
import { LoginFormComponent } from '../../../forms/login-form/login-form.component';
import { FormLink } from 'src/app/models/ui/form-link.model';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  title = 'Login';
  loginFormComponentWrapper: FormComponentWrapper = {
    formComponent: LoginFormComponent,
  };
  linkToRegister: FormLink = {
    ariaLabel: 'register',
    link: '/register',
    text: 'Do not Have an Account?',
  };
}
