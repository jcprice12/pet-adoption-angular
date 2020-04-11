import { Component } from '@angular/core';
import { NewDogFormComponent } from 'src/app/components/forms/new-dog-form/new-dog-form.component';
import { FormComponentWrapper } from 'src/app/models/ui/form-component-wrapper.model';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.css'],
})
export class NewDogComponent {
  title = 'New Dog';
  newDogFormComponentWrapper: FormComponentWrapper = {
    formComponent: NewDogFormComponent,
  };
}
