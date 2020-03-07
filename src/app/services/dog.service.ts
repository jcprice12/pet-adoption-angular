import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../models/dog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  public getDogs(): Observable<Dog[]>{
    return this.http.get<Dog[]>('http://localhost:8080/dogs');
  }
}
