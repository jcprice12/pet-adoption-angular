import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsGridComponent } from './pets-grid.component';

describe('PetsGridComponent', () => {
  let component: PetsGridComponent;
  let fixture: ComponentFixture<PetsGridComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PetsGridComponent],
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
