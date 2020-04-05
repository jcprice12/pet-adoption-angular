import { Component, Input, OnInit } from '@angular/core';
import { PetUI } from 'src/app/models/ui/pet-ui.model';

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
