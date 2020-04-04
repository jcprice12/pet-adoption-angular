import { Component } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';
import { PetsComponent } from '../pets/pets.component';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
})
export class FishComponent extends PetsComponent {
  constructor(fishService: FishService) {
    super(fishService);
  }
}
