import { Observable } from 'rxjs';
import { Pet } from '../models/rest-api/pet.model';

export interface NewPetService<P extends Pet> {
  addNewPet(pet: P): Observable<P>;
}
