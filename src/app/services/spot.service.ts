import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Spot, Region, SurflineSpotConditions, SurflineSpot, RegionResponse } from '../model/spotModel';
import { Observable } from 'rxjs';
import { Forecast } from '../model/forecastModel';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private http: HttpClient) { }

  public selectedRegionId: string;
  public selectedSpot: Spot;

  public getSpotById(id: string): Observable<Spot> {
    return this.http.get<Spot>(`http://localhost:3000/spots/spot/id/${id}`);
  }

  // public getRegions(): Observable<Region[]> {
  //   return this.http.get<Region[]>('http://localhost:3000/regions/regions');
  // }

  public getSpotsForRegion(): Observable<Spot[]> {
    return this.http.get<Spot[]>(`http://localhost:3000/spots/region/${this.selectedRegionId}`);
  }

  public getSpotFromSurfline(): Observable<SurflineSpot[]> {
    return this.http.get<SurflineSpot[]>(`https://api.surfline.com/v1/mobile/report/${this.selectedSpot.surflineId}`);
  }

  public getCurrentConditionsFromSurfline(): Observable<SurflineSpotConditions> {
    return this.http.get<SurflineSpotConditions>(`https://services.surfline.com/kbyg/spots/forecasts/conditions?spotId=${this.selectedSpot.surflineLongId}&days=1`);
  }

  public getForecastFromSurfline(): Observable<Forecast> {
    return this.http.get<Forecast>('https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=5942969ce98ad90013191e1c&days=5&intervalHours=24');
  }

  public getRegionsLambda(): Observable<RegionResponse> {
    return this.http.get<RegionResponse>('https://tetqc1kgx7.execute-api.eu-west-2.amazonaws.com/prod/swellregions');
  }
}
