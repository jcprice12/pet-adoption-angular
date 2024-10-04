import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { DogService } from '../../../services/dog.service';
import { FormComponent } from '../form.component';
import { mergeMap } from 'rxjs/operators';

@Component({
  templateUrl: './new-dog-form.component.html',
  styleUrls: ['./new-dog-form.component.css'],
})
export class NewDogFormComponent implements FormComponent {
  private selectedFile: File;
  readonly newDogForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    description: new UntypedFormControl(''),
    image: new UntypedFormControl(''),
  });

  constructor(private readonly dogService: DogService) {}

  onFileChanged(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file: File = input.files[0];
    if (file) {
      this.selectedFile = file;
      this.newDogForm.get('image').setValue(this.selectedFile?.name);
    }
  }

  onSubmit(): void {
    this.dogService
      .uploadPetImage(this.selectedFile)
      .pipe(
        mergeMap(imageUrl => {
          const formVal = this.newDogForm.value;
          return this.dogService.addNewPet({
            name: formVal.name,
            description: formVal.description,
            image: imageUrl,
            breeds: [
              {
                id: 1,
                name: 'Dalmation',
              },
            ],
          });
        })
      )
      .subscribe();
  }
}
