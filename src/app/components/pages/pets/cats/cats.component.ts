import { Component } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { PetsComponent } from '../pets.component';

@Component({
  templateUrl: './cats.component.html',
})
export class CatsComponent extends PetsComponent {
  constructor(catService: CatService) {
    super(catService);
  }
}
