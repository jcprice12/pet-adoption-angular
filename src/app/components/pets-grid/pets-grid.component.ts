import { Component, OnInit, Input } from '@angular/core';
import { PetWithBreeds } from 'src/app/models/pet-with-breeds.model';
import { PetUI } from 'src/app/models/pet-ui.model';

@Component({
  selector: 'app-pets-grid',
  templateUrl: './pets-grid.component.html',
  styleUrls: ['./pets-grid.component.css'],
})
export class PetsGridComponent implements OnInit {
  @Input() pets: PetUI[];

  constructor() {}

  ngOnInit(): void {}
}
