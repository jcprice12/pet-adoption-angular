import { Component } from '@angular/core';
import { NewDogFormComponent } from '../../../forms/new-dog-form/new-dog-form.component';
import { FormComponentWrapper } from '../../../../models/ui/form-component-wrapper.model';

@Component({
  templateUrl: './new-dog.component.html',
})
export class NewDogComponent {
  readonly title = 'New Dog';
  readonly newDogFormComponentWrapper: FormComponentWrapper = {
    formComponent: NewDogFormComponent,
  };
}
