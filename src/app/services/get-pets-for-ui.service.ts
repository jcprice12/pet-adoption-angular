import { Observable } from 'rxjs';
import { PetUI } from '../models/ui/pet-ui.model';

export interface GetPetsForUIService {
  getPetsForUI(): Observable<PetUI[]>;
}
