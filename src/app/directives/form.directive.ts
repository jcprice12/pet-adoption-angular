import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-form-directive]',
})
export class FormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
