import { Pet } from './pet.model';
import { Species } from './species.model';

export interface PetWithSpecies extends Pet {
  species: Species;
}
