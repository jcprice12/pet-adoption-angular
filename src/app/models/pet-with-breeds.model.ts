import { Pet } from './pet.model';
import { Breed } from './breed.model';

export interface PetWithBreeds extends Pet {
  breeds: Breed[];
}
