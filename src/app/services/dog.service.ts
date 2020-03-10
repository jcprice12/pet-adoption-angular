import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetWithBreeds } from '../models/pet-with-breeds';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private readonly http: HttpClient) {}

  public getDogs(): Observable<PetWithBreeds[]> {
    return this.http.get<PetWithBreeds[]>('api/dogs');
  }
}
