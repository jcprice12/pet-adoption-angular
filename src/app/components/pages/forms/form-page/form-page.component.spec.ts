import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponentWrapper } from '../../../../models/ui/form-component-wrapper.model';
import { FormLink } from '../../../../models/ui/form-link.model';
import { FormComponent } from '../../../forms/form.component';
import { FormPageComponent } from './form-page.component';

@Component({
  template: '<p>foo</p>',
})
class TestFormComponent implements FormComponent {
  onSubmit(): void {
    return;
  }
}

@Component({
  selector: 'app-test-host-component',
  template:
    '<app-form-page [title]="title" [formComponentWrapper]="formComponentWrapper" [formLink]="formLink"></app-form-page>',
})
class TestHostComponent {
  title = 'MyTitle';
  formComponentWrapper: FormComponentWrapper = {
    formComponent: TestFormComponent,
  };
  formLink: FormLink = {
    ariaLabel: 'link',
    link: '/link',
    text: 'link text',
  };
}

describe('FormPageComponent', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: FormPageComponent;
  let componentFixture: ComponentFixture<FormPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FormPageComponent, TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA], // see https://angular.io/guide/testing-components-scenarios#nested-component-tests
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    componentFixture = TestBed.createComponent(FormPageComponent);

    component = componentFixture.componentInstance;

    testHostFixture.detectChanges();
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
