import { Component } from '@angular/core';
import { DogService } from '../../../../services/dog.service';
import { PetsDirective } from '../../../../directives/pets/pets.directive';
import { IconLink } from '../../../../models/ui/icon-link.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dogs.component.html',
})
export class DogsComponent extends PetsDirective {
  readonly iconLinks: IconLink[] = [
    {
      action: () => this.router.navigate(['/new-dog']),
      toolTip: 'new dog',
      ariaLabel: 'new dog',
      icon: 'add_circle',
    },
  ];
  constructor(
    private readonly router: Router,
    dogService: DogService
  ) {
    super(dogService);
  }
}
