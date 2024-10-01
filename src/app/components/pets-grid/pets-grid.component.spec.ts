import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { PetsGridComponent } from './pets-grid.component';

describe('PetsGridComponent', () => {
  let component: PetsGridComponent;
  let fixture: ComponentFixture<PetsGridComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PetsGridComponent, PetCardComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
