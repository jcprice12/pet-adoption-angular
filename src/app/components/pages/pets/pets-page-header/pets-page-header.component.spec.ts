import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsPageHeaderComponent } from './pets-page-header.component';

describe('PetPageHeaderComponent', () => {
  let component: PetsPageHeaderComponent;
  let fixture: ComponentFixture<PetsPageHeaderComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [PetsPageHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
