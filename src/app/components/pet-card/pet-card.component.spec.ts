import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMutable } from '../../../../testing';
import { PetType } from '../../models/ui/pet-type.enum';

import { PetCardComponent } from './pet-card.component';

describe('PetCardComponent', () => {
  let component: CreateMutable<PetCardComponent>;
  let fixture: ComponentFixture<PetCardComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PetCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCardComponent);
    component = fixture.componentInstance;
    component.pet = {
      id: 1,
      name: 'scoot scoot',
      description: 'very scooter',
      image: 'https://my.pet.com/scoot-scoot.jpg',
      type: PetType.DOG,
      subTypes: ['lab'],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
