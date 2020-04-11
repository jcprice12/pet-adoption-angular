import { Component } from '@angular/core';
import { AllPetsForUIService } from 'src/app/services/all-pets-for-ui.service';
import { PetsComponent } from '../pets.component';

@Component({
  templateUrl: './all-pets.component.html',
})
export class AllPetsComponent extends PetsComponent {
  constructor(allPetsService: AllPetsForUIService) {
    super(allPetsService);
  }
}
