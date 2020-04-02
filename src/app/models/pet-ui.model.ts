import { Pet } from './pet.model';
import { PetType } from './pet-type.enum';

export interface PetUI extends Pet {
  type: PetType;
  subTypes: string[];
}
