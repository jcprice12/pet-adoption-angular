import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pets-page-header',
  templateUrl: './pets-page-header.component.html',
  styleUrls: ['./pets-page-header.component.css']
})
export class PetsPageHeaderComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
