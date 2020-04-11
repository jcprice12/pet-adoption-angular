import { Component, OnInit, Input } from '@angular/core';
import { IconLink } from 'src/app/models/ui/icon-link.model';

@Component({
  selector: 'app-pets-page-header',
  templateUrl: './pets-page-header.component.html',
  styleUrls: ['./pets-page-header.component.css'],
})
export class PetsPageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() iconLinks: IconLink[];

  constructor() {}

  ngOnInit(): void {}
}
