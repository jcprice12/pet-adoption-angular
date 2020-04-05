import { Component } from '@angular/core';
import { AllPetsForUIService } from 'src/app/services/all-pets-for-ui.service';
import { PetsComponent } from '../pets.component';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css'],
})
export class AllPetsComponent extends PetsComponent {
  constructor(allPetsService: AllPetsForUIService) {
    super(allPetsService);
  }
}
