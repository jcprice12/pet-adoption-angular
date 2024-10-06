import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    return;
  }
}
