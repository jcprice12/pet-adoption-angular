import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetWithBreeds } from '../models/pet-with-breeds.model';
import { PetUI } from '../models/pet-ui.model';
import { map } from 'rxjs/operators';
import { PetType } from '../models/pet-type.enum';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private readonly http: HttpClient) {}

  public getDogs(): Observable<PetWithBreeds[]> {
    return this.http.get<PetWithBreeds[]>('api/dogs');
  }

  public getDogsForUI(): Observable<PetUI[]> {
    return this.getDogs().pipe(
      map((dogs: PetWithBreeds[]) =>
        dogs.map(dog => {
          return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            description: dog.description,
            type: PetType.DOG,
            subTypes: dog.breeds.map(breed => breed.name),
          };
        })
      )
    );
  }
}
