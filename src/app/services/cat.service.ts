import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetWithBreeds } from '../models/pet-with-breeds.model';
import { PetUI } from '../models/pet-ui.model';
import { map } from 'rxjs/operators';
import { PetType } from '../models/pet-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private readonly http: HttpClient) {}

  public getCats(): Observable<PetWithBreeds[]> {
    return this.http.get<PetWithBreeds[]>('api/cats');
  }

  public getCatsForUI(): Observable<PetUI[]> {
    return this.getCats().pipe(
      map((cats: PetWithBreeds[]) =>
        cats.map(cat => {
          return {
            id: cat.id,
            name: cat.name,
            image: cat.image,
            description: cat.description,
            type: PetType.DOG,
            subTypes: cat.breeds.map(breed => breed.name),
          };
        })
      )
    );
  }
}
