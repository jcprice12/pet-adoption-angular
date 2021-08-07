import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogService } from '../../../services/dog.service';

import { NewDogFormComponent } from './new-dog-form.component';

describe('NewDogFormComponent', () => {
  let component: NewDogFormComponent;
  let fixture: ComponentFixture<NewDogFormComponent>;
  let uploadPetImageMock: jest.Mock;
  let addNewPetMock: jest.Mock;

  beforeEach(async () => {
    uploadPetImageMock = jest.fn();
    addNewPetMock = jest.fn();
    TestBed.configureTestingModule({
      declarations: [NewDogFormComponent],
      providers: [{
        provide: DogService,
        useValue: {
          uploadPetImage: uploadPetImageMock,
          addNewPet: addNewPetMock
        }
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
