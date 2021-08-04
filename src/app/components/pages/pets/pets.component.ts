import { Directive, OnInit } from '@angular/core';
import { PetUI } from '../../../models/ui/pet-ui.model';
import { GetPetsForUIService } from '../../../services/get-pets-for-ui.service';

@Directive()
export abstract class PetsComponent implements OnInit {
  pets: PetUI[];

  constructor(private readonly getPetsForUIService: GetPetsForUIService) {}

  ngOnInit(): void {
    this.getPetsForUIService.getPetsForUI().subscribe(pets => {
      this.pets = pets;
    });
  }
}
