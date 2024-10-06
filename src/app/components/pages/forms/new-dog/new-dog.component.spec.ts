import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDogComponent } from './new-dog.component';

describe('NewDogComponent', () => {
  let component: NewDogComponent;
  let fixture: ComponentFixture<NewDogComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [NewDogComponent],
      schemas: [NO_ERRORS_SCHEMA], // see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
