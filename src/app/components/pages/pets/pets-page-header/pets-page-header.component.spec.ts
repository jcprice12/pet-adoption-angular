import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsPageHeaderComponent } from './pets-page-header.component';

describe('PetPageHeaderComponent', () => {
  let component: PetsPageHeaderComponent;
  let fixture: ComponentFixture<PetsPageHeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PetsPageHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA], // hack, see https://angular.io/guide/testing-components-scenarios#nested-component-tests
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
