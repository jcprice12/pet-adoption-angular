import { Component } from '@angular/core';
import { FormComponentWrapper } from 'src/app/models/ui/form-component-wrapper.model';
import { RegisterFormComponent } from 'src/app/components/forms/register-form/register-form.component';
import { FormLink } from 'src/app/models/ui/form-link.model';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  readonly title = 'Sign Up';
  readonly registerFormComponentWrapper: FormComponentWrapper = {
    formComponent: RegisterFormComponent,
  };
  readonly linkToLogin: FormLink = {
    ariaLabel: 'login',
    link: '/login',
    text: 'Already Have an Account?',
  };
}
