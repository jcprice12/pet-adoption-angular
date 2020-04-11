import { Component } from '@angular/core';
import { DogService } from '../../../../services/dog.service';
import { PetsComponent } from '../pets.component';
import { IconLink } from 'src/app/models/ui/icon-link.model';

@Component({
  templateUrl: './dogs.component.html',
})
export class DogsComponent extends PetsComponent {
  readonly iconLinks: IconLink[] = [
    {
      url: '/new-dog',
      toolTip: 'new dog',
      ariaLabel: 'new dog',
      icon: 'add_circle',
    },
  ];
  constructor(dogService: DogService) {
    super(dogService);
  }
}
