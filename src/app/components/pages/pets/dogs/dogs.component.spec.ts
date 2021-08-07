import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PetUI } from '../../../../models/ui/pet-ui.model';
import { DogService } from '../../../../services/dog.service';

import { DogsComponent } from './dogs.component';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;
  let getPetsForUIMock: jest.Mock;
  let dogs: PetUI[];

  beforeEach(async () => {
    getPetsForUIMock = jest.fn();
    TestBed.configureTestingModule({
      declarations: [DogsComponent],
      providers: [
        {
          provide: DogService,
          useValue: {
            getPetsForUI: getPetsForUIMock,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);

    dogs = [];
    getPetsForUIMock.mockReturnValue(of(dogs));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
