import { Component } from '@angular/core';
import { FormComponentWrapper } from 'src/app/models/ui/form-component-wrapper.model';
import { RegisterFormComponent } from 'src/app/components/forms/register-form/register-form.component';
import { FormLink } from 'src/app/models/ui/form-link.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  title = 'Sign Up';
  registerFormComponentWrapper: FormComponentWrapper = {
    formComponent: RegisterFormComponent
  };
  linkToLogin: FormLink = {
    ariaLabel: 'login',
    link: '/login',
    text: 'Already Have an Account?'
  };
}
