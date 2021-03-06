import { Component } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';
import { PetsComponent } from '../pets.component';

@Component({
  templateUrl: './fish.component.html',
})
export class FishComponent extends PetsComponent {
  constructor(fishService: FishService) {
    super(fishService);
  }
}
