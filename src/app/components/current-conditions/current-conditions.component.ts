import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentWeather } from '../../model/currentWeatherModel';
import { Forecast, Wave } from '../../model/forecastModel';
import { Conditions, SurflineSpot, SurflineSpotConditions } from '../../model/spotModel';
import { SpotService } from '../../services/spot.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  constructor(public spotService: SpotService, private route: ActivatedRoute, private weatherService: WeatherService) { }
  public conditions: Conditions;
  public forecast: Wave[];
  public flat = false;
  public currentWeather: CurrentWeather;
  @Input() spot: SurflineSpot;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.spotService.getSpotByIdLambda(params.id).subscribe(spot => {
        this.spotService.selectedSpot = spot[0];
        this.weatherService.selectedSpot = spot[0];
        this.getConditions();
        this.getCurrentWeather();
      });
    });
  }

  private getConditions(): void {
    this.spotService.getCurrentConditionsFromSurfline().subscribe((data: SurflineSpotConditions) => {
      this.conditions = data.data.conditions[0];
      if (data.data.conditions[0].am.minHeight === 0 && data.data.conditions[0].am.maxHeight === 0) {
        this.flat = true;
      }
    });
  }

  public getCurrentWeather(): void {
    this.weatherService.getCurrentWeather().subscribe((data: CurrentWeather) => {
      this.currentWeather = data;
    });
  }

}
