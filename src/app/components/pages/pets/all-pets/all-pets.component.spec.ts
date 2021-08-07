import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PetUI } from '../../../../models/ui/pet-ui.model';
import { AllPetsForUIService } from '../../../../services/all-pets-for-ui.service';

import { AllPetsComponent } from './all-pets.component';

describe('AllPetsComponent', () => {
  let component: AllPetsComponent;
  let fixture: ComponentFixture<AllPetsComponent>;
  let getPetsForUIMock: jest.Mock;
  let petsForUi: PetUI[];

  beforeEach(async () => {
    getPetsForUIMock = jest.fn();
    TestBed.configureTestingModule({
      declarations: [AllPetsComponent],
      providers: [
        {
          provide: AllPetsForUIService,
          useValue: {
            getPetsForUI: getPetsForUIMock,
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA], // see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPetsComponent);
    component = fixture.componentInstance;

    petsForUi = [];
    getPetsForUIMock.mockReturnValue(of(petsForUi));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
