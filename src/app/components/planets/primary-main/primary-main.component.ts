import {Component, OnInit} from '@angular/core';
import {PlanetsApiService} from "./service/planets-api.service";
import {Planet} from "./service/planets.model";

@Component({
  selector: 'app-primary-main',
  templateUrl: './primary-main.component.html',
  styleUrls: ['./primary-main.component.scss']
})
export class PrimaryMainComponent implements OnInit {
  planets: Planet[] = []
  loading = false

  constructor(
    private planetsApiService: PlanetsApiService) {
  }

  ngOnInit(): void {
    this.fetchPlanets()
  }


  fetchPlanets() {
    this.loading = true
    this.planetsApiService.getPlanets()
      .subscribe({
        next: planets =>  this.planets = planets,
        error: error => console.log(error),
        complete: () => this.loading = false
      })
  }
}
