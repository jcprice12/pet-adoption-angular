import { PetForUIService } from './pet-for-ui.service';
import { PetWithBreeds } from '../models/pet-with-breeds.model';

export abstract class PetWithBreedsForUIService extends PetForUIService<
  PetWithBreeds
> {
  protected mapPetSubTypes(pet: PetWithBreeds) {
    return pet.breeds.map(breed => breed.name);
  }
}
