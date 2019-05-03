import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SurflineSpot } from '../../model/spotModel';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.component.html',
  styleUrls: ['./spot-detail.component.scss']
})
export class SpotDetailComponent implements OnInit {
  public spot: SurflineSpot;

  constructor(public spotService: SpotService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.spotService.getSpotByIdLambda(params.id).subscribe(spot => {
        this.spotService.selectedSpot = spot[0]; // in case page is refreshed
        this.getSpotFromSurfline();
      });
    });
  }

  private getSpotFromSurfline(): void {
    this.spotService.getSpotFromSurfline().subscribe((data: SurflineSpot[]) => {
      this.spot = data[0]; // data comes back as an array with one element so pick that one a assign it to spot
    });
  }

}
