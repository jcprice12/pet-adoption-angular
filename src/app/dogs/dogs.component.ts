import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Dog[];

  constructor() { }

  ngOnInit(): void {
    this.dogs = [{
      id: 1,
      name: 'Buddy',
      description: 'A good pupper.',
      breeds: [
        {
          name: 'Labrador Retriever'
        }
      ]
    }];
  }

}
