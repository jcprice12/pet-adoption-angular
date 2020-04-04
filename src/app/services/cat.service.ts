import { Injectable } from '@angular/core';
import { PetType } from '../models/ui/pet-type.enum';
import { PetWithBreedsForUIService } from './pet-with-breeds-for-ui.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatService extends PetWithBreedsForUIService {
  constructor(http: HttpClient) {
    super(http);
  }

  protected getBaseUrl(): string {
    return 'api/cats';
  }
  protected getPetType(): PetType {
    return PetType.CAT;
  }
}
