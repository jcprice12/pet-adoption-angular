import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { DogService } from '../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Dog[];

  constructor(private readonly dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }

}
