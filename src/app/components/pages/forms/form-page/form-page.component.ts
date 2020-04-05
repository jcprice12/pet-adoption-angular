import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormDirective } from 'src/app/directives/form/form.directive';
import { FormComponentWrapper } from '../../../../models/ui/form-component-wrapper.model';
import { FormLink } from '../../../../models/ui/form-link.model';

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
