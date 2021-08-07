import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PetUI } from '../../../../models/ui/pet-ui.model';
import { CatService } from '../../../../services/cat.service';

import { CatsComponent } from './cats.component';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;
  let getPetsForUIMock: jest.Mock;
  let cats: PetUI[];

  beforeEach(async () => {
    getPetsForUIMock = jest.fn();
    TestBed.configureTestingModule({
      declarations: [CatsComponent],
      providers: [
        {
          provide: CatService,
          useValue: {
            getPetsForUI: getPetsForUIMock,
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA], // see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsComponent);

    cats = [];
    getPetsForUIMock.mockReturnValue(of(cats));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
