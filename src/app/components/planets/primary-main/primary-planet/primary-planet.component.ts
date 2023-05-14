import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PlanetsApiService} from "../service/planets-api.service";
import {Planets} from "../service/planets.model";

@Component({
  selector: 'app-primary-planet',
  templateUrl: './primary-planet.component.html',
  styleUrls: ['./primary-planet.component.scss']
})
export class PrimaryPlanetComponent implements OnInit {
  planet = {} as Planets
  loading = false

  constructor(
    private route: ActivatedRoute,
    private planetsApiServise: PlanetsApiService) {
  }

  ngOnInit(): void {
    this.fetchPlanet()
  }

  fetchPlanet() {
    this.loading = true
    this.route.params.subscribe((params: Params) => {
      this.planetsApiServise.getOnePlanet(params['id'])
        .subscribe({
        next: p => this.planet = p,
        error: error => console.log(error),
        complete: () => this.loading = false
      })
    })
  }
}
