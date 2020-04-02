import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { PetUI } from 'src/app/models/pet-ui.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  cats: PetUI[];

  constructor(private readonly catService: CatService) {}

  ngOnInit(): void {
    this.catService.getPetsForUI().subscribe(cats => {
      this.cats = cats;
    });
  }
}
