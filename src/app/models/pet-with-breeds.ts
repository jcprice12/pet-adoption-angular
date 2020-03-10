import { Pet } from './pet';
import { Breed } from './breed';

export interface PetWithBreeds extends Pet {
  breeds: Breed[];
}
