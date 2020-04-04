import { Component } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { PetsComponent } from '../pets/pets.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent extends PetsComponent {
  constructor(catService: CatService) {
    super(catService);
  }
}
