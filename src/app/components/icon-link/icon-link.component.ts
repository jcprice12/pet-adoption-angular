import { Component, Input } from '@angular/core';
import { IconLink } from 'src/app/models/ui/icon-link.model';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
})
export class IconLinkComponent {
  @Input() readonly iconLink: IconLink;
}
