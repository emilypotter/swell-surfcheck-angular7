import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { ActivatedRoute } from '@angular/router';
import { Spot } from '../../model/spotModel';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.scss']
})
export class SpotListComponent implements OnInit {
  public fullArray = [];
  public array = [];
  private sum = 5;
  public throttle = 300;
  public scrollDistance = 1;
  public loading = true;

  constructor(public spotService: SpotService, private route: ActivatedRoute) { }

  ngOnInit() {
    // get regionId from url in case page is refreshed
    this.route.queryParams.subscribe(params => {
      this.spotService.selectedRegionId = params.id;
      // localStorage.setItem('selectedRegionId', params.id);
      this.getSpotsForRegion();
    });

  }

  public getSpotsForRegion(): void {
    this.spotService.getSpotsForRegionLambda(this.spotService.selectedRegionId).subscribe((res: Spot[]) => { // TODO: error handling
      this.fullArray = res;
      if (this.fullArray.length > 5) {
        this.addItems(0, this.sum);
      } else {
        this.addItems(0, this.fullArray.length);
      }
      this.loading = false;
    });
  }

  public onScroll() {
    // add another item
    if (this.sum < this.fullArray.length) {
      const start = this.sum;
      this.sum += 1;
      this.addItems(start, this.sum);
    }
  }

  public addItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array.push(this.fullArray[i]);
    }
  }

  public selectSpot(spot: Spot) {
    this.spotService.selectedSpot = spot;
  }
}
