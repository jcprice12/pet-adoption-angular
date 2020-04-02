import { Observable } from 'rxjs';
import { PetUI } from '../models/pet-ui.model';
import { Pet } from '../models/pet.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PetType } from '../models/pet-type.enum';

export abstract class PetForUIService<P extends Pet> {
  protected abstract getBaseUrl(): string;
  protected abstract getPetType(): PetType;
  protected abstract mapPetSubTypes(p: P): string[];

  constructor(private readonly http: HttpClient) {}

  public getPets(): Observable<P[]> {
    return this.http.get<P[]>(this.getBaseUrl());
  }

  public getPetsForUI(): Observable<PetUI[]> {
    return this.getPets().pipe(
      map((pets: P[]) =>
        pets.map(pet => {
          return {
            id: pet.id,
            name: pet.name,
            image: pet.image,
            description: pet.description,
            type: this.getPetType(),
            subTypes: this.mapPetSubTypes(pet),
          };
        })
      )
    );
  }
}
