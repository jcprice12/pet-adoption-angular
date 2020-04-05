import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PetUI } from '../models/ui/pet-ui.model';
import { CatService } from './cat.service';
import { DogService } from './dog.service';
import { FishService } from './fish.service';
import { GetPetsForUIService } from './get-pets-for-ui.service';

@Injectable({
  providedIn: 'root',
})
export class AllPetsForUIService implements GetPetsForUIService {
  constructor(
    private readonly dogService: DogService,
    private readonly catService: CatService,
    private readonly fishService: FishService
  ) {}

  getPetsForUI(): Observable<PetUI[]> {
    return forkJoin([
      this.dogService.getPetsForUI(),
      this.catService.getPetsForUI(),
      this.fishService.getPetsForUI(),
    ]).pipe(
      map(forkJoinResults =>
        forkJoinResults.reduce(
          (flattenedList, subList) => flattenedList.concat(subList),
          []
        )
      )
    );
  }
}
