import { Component } from '@angular/core';
import { FishService } from '../../../../services/fish.service';
import { PetsDirective } from '../../../../directives/pets/pets.directive';

@Component({
  templateUrl: './fish.component.html',
})
export class FishComponent extends PetsDirective {
  constructor(fishService: FishService) {
    super(fishService);
  }
}
