import { Component } from '@angular/core';
import { DogService } from '../../../../services/dog.service';
import { PetsDirective } from '../../../../directives/pets/pets.directive';
import { IconLink } from '../../../../models/ui/icon-link.model';

@Component({
  templateUrl: './dogs.component.html',
})
export class DogsComponent extends PetsDirective {
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
