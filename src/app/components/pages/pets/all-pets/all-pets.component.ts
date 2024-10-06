import { Component } from '@angular/core';
import { AllPetsForUIService } from '../../../../services/all-pets-for-ui.service';
import { PetsDirective } from '../../../../directives/pets/pets.directive';

@Component({
  templateUrl: './all-pets.component.html',
})
export class AllPetsComponent extends PetsDirective {
  constructor(allPetsService: AllPetsForUIService) {
    super(allPetsService);
  }
}
