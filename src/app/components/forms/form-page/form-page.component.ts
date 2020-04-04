import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import { FormComponentWrapper } from '../form-component-wrapper';
import { FormDirective } from 'src/app/directives/form.directive';
import { FormLink } from '../form-link';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  @Input() title: string;
  @Input() formComponentWrapper: FormComponentWrapper;
  @Input() formLink: FormLink;
  @ViewChild(FormDirective, { static: true }) formHost: FormDirective;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.loadFormComponent();
  }

  loadFormComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.formComponentWrapper.formComponent
    );
    const viewContainerRef = this.formHost.viewContainerRef;
    viewContainerRef.createComponent(componentFactory);
  }
}
