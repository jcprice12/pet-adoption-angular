import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PetUI } from '../../../../models/ui/pet-ui.model';
import { FishService } from '../../../../services/fish.service';
import { FishComponent } from './fish.component';

describe('FishComponent', () => {
  let component: FishComponent;
  let fixture: ComponentFixture<FishComponent>;
  let getPetsForUIMock: jest.Mock;
  let fish: PetUI[];

  beforeEach(async () => {
    getPetsForUIMock = jest.fn();
    TestBed.configureTestingModule({
      declarations: [FishComponent],
      providers: [
        {
          provide: FishService,
          useValue: {
            getPetsForUI: getPetsForUIMock,
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA], // see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishComponent);

    fish = [];
    getPetsForUIMock.mockReturnValue(of(fish));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
