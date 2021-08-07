import { Observable, of } from 'rxjs';
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
  private counter = 0;

  constructor(private readonly http: HttpClient) {}

  public addNewPet(pet: Partial<P>): Observable<P> {
    //return this.http.post<P>(this.getBaseUrl(), pet);
    this.counter++;
    return of(({
      id: this.counter,
      name: 'scooter',
      description: 'a good boy',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg',
      species: {
        id: 1,
        commonName: 'Fish',
      },
      breeds: [{ id: 1, name: 'border collie' }],
    } as unknown) as P);
  }

  public uploadPetImage(file: File): Observable<string> {
    // const formData = new FormData();
    // formData.append('image', file, file.name);
    // return this.http.put<string>(`${this.getBaseUrl()}/images`, formData, {
    //   responseType: 'text' as 'json'
    // });
    return of(
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg'
    );
  }

  public getPets(): Observable<P[]> {
    //return this.http.get<P[]>(this.getBaseUrl());
    return of([
      ({
        id: this.counter,
        name: 'scooter',
        description: 'a good boy',
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg',
        breeds: [{ id: 1, name: 'border collie' }],
        species: {
          id: 1,
          commonName: 'Fish',
        },
      } as unknown) as P,
    ]);
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
