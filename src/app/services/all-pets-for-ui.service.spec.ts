import { TestBed } from '@angular/core/testing';
import { AllPetsForUIService } from './all-pets-for-ui.service';
import { CatService } from './cat.service';
import { DogService } from './dog.service';
import { FishService } from './fish.service';


describe('AllPetsForUIService', () => {
  let service: AllPetsForUIService;
  let getDogsForUiMock: jest.Mock;
  let getCatsForUiMock: jest.Mock;
  let getFishForUiMock: jest.Mock;

  beforeEach(() => {
    getCatsForUiMock = jest.fn();
    getDogsForUiMock = jest.fn();
    getFishForUiMock = jest.fn();
    TestBed.configureTestingModule({
      providers: [
        AllPetsForUIService,
        {
          provide: DogService,
          useValue: {
            getPetsForUi: getDogsForUiMock
          }
        },
        {
          provide: CatService,
          useValue: {
            getPetsForUi: getCatsForUiMock
          }
        },
        {
          provide: FishService,
          useValue: {
            getPetsForUi: getFishForUiMock
          }
        }
      ]
    });
    service = TestBed.inject(AllPetsForUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
