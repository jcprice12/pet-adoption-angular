import { Component } from '@angular/core';
import { CatService } from '../../../../services/cat.service';
import { PetsDirective } from '../../../../directives/pets/pets.directive';

@Component({
  templateUrl: './cats.component.html',
})
export class CatsComponent extends PetsDirective {
  constructor(catService: CatService) {
    super(catService);
  }
}
