import { Component } from '@angular/core';
import { FormComponentWrapper } from 'src/app/components/forms/form-component-wrapper';
import { RegisterFormComponent } from 'src/app/components/forms/register-form/register-form.component';
import { FormLink } from 'src/app/components/forms/form-link';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  title = 'Sign Up';
  registerFormComponentWrapper = new FormComponentWrapper(RegisterFormComponent);
  linkToLogin: FormLink = {
    ariaLabel: 'login',
    link: '/login',
    text: 'Already Have an Account?'
  };
}
