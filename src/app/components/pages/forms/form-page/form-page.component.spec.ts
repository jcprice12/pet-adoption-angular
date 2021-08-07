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
  onSubmit(): void {}
}

@Component({
  selector: 'test-host-component',
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
  let testHostComponent: TestHostComponent;
  let component: FormPageComponent;
  let componentFixture: ComponentFixture<FormPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FormPageComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    componentFixture = TestBed.createComponent(FormPageComponent);

    testHostComponent = testHostFixture.componentInstance;
    component = componentFixture.componentInstance;

    testHostFixture.detectChanges();
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
