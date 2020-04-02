import { Component, OnInit } from '@angular/core';
import { FishService } from 'src/app/services/fish.service';
import { PetUI } from 'src/app/models/pet-ui.model';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css'],
})
export class FishComponent implements OnInit {
  fish: PetUI[];

  constructor(private readonly fishService: FishService) {}

  ngOnInit(): void {
    this.fishService.getPetsForUI().subscribe(fish => {
      this.fish = fish;
    });
  }
}
