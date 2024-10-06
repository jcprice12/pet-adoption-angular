import { Component, Input } from '@angular/core';
import { IconLink } from '../../../../models/ui/icon-link.model';

@Component({
  selector: 'app-pets-page-header',
  templateUrl: './pets-page-header.component.html',
  styleUrls: ['./pets-page-header.component.css'],
})
export class PetsPageHeaderComponent {
  @Input() readonly title: string;
  @Input() readonly iconLinks: IconLink[];
}
