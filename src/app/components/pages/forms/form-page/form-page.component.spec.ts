import { Component, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDirective } from '../../../../directives/form/form.directive';
import { FormComponentWrapper } from '../../../../models/ui/form-component-wrapper.model';
import { FormLink } from '../../../../models/ui/form-link.model';
import { FormComponent } from '../../../forms/form.component';
import { FormPageComponent } from './form-page.component';

@Component({
  template: ''
})
class TestFormComponent implements FormComponent {
  onSubmit(): void {}
}

@Component({
  template: '<app-form-page [title]="title" [formComponentWrapper]="formComponentWrapper" [formLink]="formLink"></app-form-page>'
})
class TestHostComponent {
  title = 'MyTitle';
  formComponentWrapper: FormComponentWrapper = {
    formComponent: TestFormComponent
  };
  formLink: FormLink = {
    ariaLabel: 'link',
    link: '/link',
    text: 'link text',
  };
}

describe('FormPageComponent', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;
  let component: FormPageComponent;
  let componentFixture: ComponentFixture<FormPageComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [FormPageComponent, TestHostComponent, TestFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(FormPageComponent);
    component = componentFixture.componentInstance;
    component.formHost = {
      viewContainerRef: {
        createComponent: jest.fn()
      } as unknown as ViewContainerRef
    }
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
