import { Component, OnInit } from "@angular/core";
import { SpotService } from '../../services/spot.service';
import { Region } from '../../model/spotModel';
import { RegionResponse } from '../../model/spotModel';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public spotService: SpotService) { }
  public regions: Region[];
  public loading = true;

  ngOnInit(): void {
    this.getRegionsForDropdown();
  }

  public getRegionsForDropdown(): void {
    this.spotService.getRegionsLambda().subscribe((res: RegionResponse) => { // TODO: error handling
      this.regions = JSON.parse(res.body);
      this.loading = false;
    });
  }
}
