import { Component, Input, OnInit } from '@angular/core';
import { PetUI } from 'src/app/models/pet-ui.model';

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.css'],
})
export class PetsPageComponent implements OnInit {
  @Input() pets: PetUI[];

  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
