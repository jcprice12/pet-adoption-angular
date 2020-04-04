import { Component } from '@angular/core';
import { FormComponentWrapper } from '../../../forms/form-component-wrapper';
import { LoginFormComponent } from '../../../forms/login-form/login-form.component';
import { FormLink } from 'src/app/components/forms/form-link';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  loginFormComponentWrapper = new FormComponentWrapper(LoginFormComponent);
  linkToRegister: FormLink = {
    ariaLabel: 'register',
    link: '/register',
    text: 'Don\'t Have an Account?'
  };
}
