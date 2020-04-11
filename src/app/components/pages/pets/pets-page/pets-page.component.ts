import { Component, Input, OnInit } from '@angular/core';
import { PetUI } from 'src/app/models/ui/pet-ui.model';
import { IconLink } from 'src/app/models/ui/icon-link.model';

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.css'],
})
export class PetsPageComponent implements OnInit {
  @Input() pets: PetUI[];
  @Input() iconLinks: IconLink[];
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
