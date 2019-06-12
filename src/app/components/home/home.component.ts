import { Component, OnInit } from "@angular/core";
import { SpotService } from '../../services/spot.service';
import { Region, Spot, LambdaResponse } from '../../model/spotModel';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { subscribe } from 'graphql';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public spotService: SpotService, private router: Router) { }
  public regions: Region[];
  public spotNames: string[];
  public spotsLoaded = false;
  public regionsLoaded = false;
  public spotSearch = new FormControl();
  public filteredOptions: Observable<string[]>;
  public selectedRegionId: string;

  ngOnInit(): void {
    this.getRegionsForDropdown();
    this.getSpotsForAutocomplete();
    this.spotNames = [];

    this.filteredOptions = this.spotSearch.valueChanges // if doesnt run this is the problem
      .pipe(startWith(''), map(value => this.filter(value))
      );
  }

  public getRegionsForDropdown(): void {
    this.spotService.getRegionsLambda().subscribe((res: LambdaResponse) => { // TODO: error handling
      this.regions = JSON.parse(res.body);
      this.regionsLoaded = true;
    });
  }

  public getSpotsForAutocomplete(): void {
    this.spotService.getSpotsLambda().subscribe((res: LambdaResponse) => { // TODO: error handling
      const spots = JSON.parse(res.body);
      spots.forEach(spot => {
        this.spotNames.push(spot.spotName);
      });
      this.spotsLoaded = true;
    });
  }

  private filter(value: string): string[] { // think this is causing the problems
    const filterValue = value.toLowerCase();
    return this.spotNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  public goToSpot(spot: string) {
    this.spotService.getSpotByNameLambda(spot).subscribe((res: LambdaResponse) => {
      this.router.navigate(['/spot'], { queryParams: { id: res[0]._id } });
    });
  }

  public goToRegion() {
    this.spotService.selectedRegionId = this.selectedRegionId;
    this.router.navigate(['/region'], { queryParams: { id: this.selectedRegionId } });
  }
}
