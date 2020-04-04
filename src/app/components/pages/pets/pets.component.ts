import { OnInit } from '@angular/core';
import { PetUI } from 'src/app/models/pet-ui.model';
import { PetForUIService } from 'src/app/services/pet-for-ui.service';
import { Pet } from 'src/app/models/pet.model';

export abstract class PetsComponent implements OnInit {
  pets: PetUI[];

  constructor(private readonly petForUIService: PetForUIService<Pet>) {}

  ngOnInit(): void {
    this.petForUIService.getPetsForUI().subscribe(pets => {
      this.pets = pets;
    });
  }
}
