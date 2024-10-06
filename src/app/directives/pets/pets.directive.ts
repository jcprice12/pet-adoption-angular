import { Directive, OnInit } from '@angular/core';
import { PetUI } from '../../models/ui/pet-ui.model';
import { GetPetsForUIService } from '../../services/get-pets-for-ui.service';

/**
 * Not actually a real component or directive
 * The directive decorator is a hack to give me the ability to implment OnInit
 * Thoughts to refactor:
 *  - do not implement ngOnInit, instead provide a method that can be called by subclasses in their ngOnInit methods
 *  - make this class an interface instead that simply defines pets: PetUI[] and have implmenting classes instantiate it
 */
@Directive()
export abstract class PetsDirective implements OnInit {
  pets: PetUI[];

  constructor(private readonly getPetsForUIService: GetPetsForUIService) {}

  ngOnInit(): void {
    this.getPetsForUIService.getPetsForUI().subscribe((pets) => {
      this.pets = pets;
    });
  }
}
