import { Component, Input } from '@angular/core';
import { PetUI } from 'src/app/models/ui/pet-ui.model';

@Component({
  selector: 'app-pets-grid',
  templateUrl: './pets-grid.component.html',
})
export class PetsGridComponent {
  @Input() readonly pets: PetUI[];
}
