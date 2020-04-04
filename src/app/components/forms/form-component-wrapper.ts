import { FormComponent } from './form.component';
import { Type } from '@angular/core';

export class FormComponentWrapper {
  constructor(public formComponent: Type<FormComponent>) {}
}
