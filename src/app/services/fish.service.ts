import { Injectable } from '@angular/core';
import { PetType } from '../models/pet-type.enum';
import { PetWithSpeciesForUIService } from './pet-with-species-for-ui.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FishService extends PetWithSpeciesForUIService {
  constructor(http: HttpClient) {
    super(http);
  }

  protected getBaseUrl(): string {
    return 'api/fish';
  }
  protected getPetType(): PetType {
    return PetType.FISH;
  }
}
