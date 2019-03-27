import { Component, OnInit } from "@angular/core";
import { SpotService } from '../../services/spot.service';
import { Region } from 'src/app/model/spotModel';
import { RegionResponse } from '../../model/spotModel';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public spotService: SpotService) { }
  public regions: Region[];

  ngOnInit(): void {
    this.getRegionsForDropdown();
  }

  public getRegionsForDropdown(): void {
    this.spotService.getRegionsLambda().subscribe((res: RegionResponse) => { // TODO: error handling
      this.regions = res.regions;
    });
  }
}
