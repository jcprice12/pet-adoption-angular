import { OnInit } from '@angular/core';
import { PetUI } from 'src/app/models/ui/pet-ui.model';
import { GetPetsForUIService } from 'src/app/services/get-pets-for-ui.service';

export abstract class PetsComponent implements OnInit {
  pets: PetUI[];

  constructor(private readonly getPetsForUIService: GetPetsForUIService) {}

  ngOnInit(): void {
    this.getPetsForUIService.getPetsForUI().subscribe(pets => {
      this.pets = pets;
    });
  }
}
