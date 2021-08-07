import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormDirective } from '../../../directives/form/form.directive';
import { FormComponentWrapper } from '../../../models/ui/form-component-wrapper.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() readonly formComponentWrapper: FormComponentWrapper;
  @ViewChild(FormDirective, { static: true }) readonly formHost: FormDirective;

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
