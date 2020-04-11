import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DogService } from 'src/app/services/dog.service';
import { FormComponent } from '../form.component';

@Component({
  selector: 'app-new-dog-form',
  templateUrl: './new-dog-form.component.html',
  styleUrls: ['./new-dog-form.component.css'],
})
export class NewDogFormComponent implements FormComponent {
  newDogForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  constructor(private readonly dogService: DogService) {}

  onSubmit(): void {
    const formVal = this.newDogForm.value;
    this.dogService
      .addNewPet({
        name: formVal.name,
        description: formVal.description,
        breeds: [
          {
            id: 1,
            name: 'Dalmation',
          },
        ],
      })
      .subscribe();
  }
}
