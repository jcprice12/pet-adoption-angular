import { Component, Input } from '@angular/core';
import { PetUI } from 'src/app/models/ui/pet-ui.model';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css'],
})
export class PetCardComponent {
  @Input() readonly pet: PetUI;
}
