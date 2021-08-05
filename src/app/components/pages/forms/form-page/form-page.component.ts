import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormDirective } from '../../../../directives/form/form.directive';
import { FormComponentWrapper } from '../../../../models/ui/form-component-wrapper.model';
import { FormLink } from '../../../../models/ui/form-link.model';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  @Input() readonly title: string;
  @Input() readonly formComponentWrapper: FormComponentWrapper;
  @Input() readonly formLink: FormLink;
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
    this.formHost.viewContainerRef.createComponent(componentFactory);
  }
}
