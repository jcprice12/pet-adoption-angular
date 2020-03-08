import { Component, OnInit, Input } from '@angular/core';
import { PetWithBreeds } from '../models/pet-with-breeds';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {
  @Input() dog: PetWithBreeds;

  constructor() { }

  ngOnInit(): void {
  }

}
