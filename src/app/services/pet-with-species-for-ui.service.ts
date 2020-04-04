import { PetForUIService } from './pet-for-ui.service';
import { PetWithSpecies } from '../models/rest-api/pet-with-species.model';

export abstract class PetWithSpeciesForUIService extends PetForUIService<
  PetWithSpecies
> {
  protected mapPetSubTypes(pet: PetWithSpecies) {
    return [pet.species.commonName];
  }
}
