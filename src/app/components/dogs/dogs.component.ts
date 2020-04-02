import { Component, OnInit } from '@angular/core';
import { PetUI } from 'src/app/models/pet-ui.model';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogs: PetUI[];

  constructor(private readonly dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogsForUI().subscribe(dogs => {
      this.dogs = dogs;
    });
  }
}
