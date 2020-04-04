import { Component } from '@angular/core';
import { DogService } from '../../../../services/dog.service';
import { PetsComponent } from '../pets.component';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent extends PetsComponent {
  constructor(dogService: DogService) {
    super(dogService);
  }
}
