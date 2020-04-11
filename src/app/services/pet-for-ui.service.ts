import { Observable } from 'rxjs';
import { PetUI } from '../models/ui/pet-ui.model';
import { Pet } from '../models/rest-api/pet.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PetType } from '../models/ui/pet-type.enum';
import { GetPetsForUIService } from './get-pets-for-ui.service';
import { NewPetService } from './new-pet.service';

export abstract class PetForUIService<P extends Pet>
  implements GetPetsForUIService, NewPetService<P> {
  protected abstract getBaseUrl(): string;
  protected abstract getPetType(): PetType;
  protected abstract mapPetSubTypes(p: P): string[];

  constructor(private readonly http: HttpClient) {}

  public addNewPet(pet: Partial<P>): Observable<P> {
    return this.http.post<P>(this.getBaseUrl(), pet);
  }

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
