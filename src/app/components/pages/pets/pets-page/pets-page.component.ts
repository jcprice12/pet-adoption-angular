import { Component, Input } from '@angular/core';
import { PetUI } from '../../../../models/ui/pet-ui.model';
import { IconLink } from '../../../../models/ui/icon-link.model';

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
})
export class PetsPageComponent {
  @Input() readonly pets: PetUI[];
  @Input() readonly iconLinks: IconLink[];
  @Input() readonly title: string;
}
