import { FormDirective } from './form.directive';
import { ViewContainerRef } from '@angular/core';

describe('FormDirective', () => {
  it('should create an instance', () => {
    const directive = new FormDirective({} as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
