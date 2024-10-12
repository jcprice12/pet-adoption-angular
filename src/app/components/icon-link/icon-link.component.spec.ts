import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMutable } from '../../../../testing';
import { IconLinkComponent } from './icon-link.component';

describe('IconLinkComponent', () => {
  let component: CreateMutable<IconLinkComponent>;
  let fixture: ComponentFixture<IconLinkComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [IconLinkComponent],
      schemas: [NO_ERRORS_SCHEMA], // see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinkComponent);
    component = fixture.componentInstance;
    component.iconLink = {
      action: () => undefined,
      toolTip: 'my-icon',
      ariaLabel: 'my-icon',
      icon: 'my-icon',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
