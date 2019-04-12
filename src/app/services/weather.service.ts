import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../model/currentWeatherModel';
import { SpotService } from './spot.service';
import { Forecast } from '../model/forecastModel';
import { WeatherForecast } from '../model/weatherForecastModel';
import { Spot } from '../model/spotModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient, private spotService: SpotService) { }

  public selectedSpot: Spot;

  public getCurrentWeather(): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${
      this.selectedSpot.spotName
      }&units=metric&APPID=529ed471254f7e720df0ecf1580d78cc`
    );
  }

  public getWeatherForecast(): Observable<WeatherForecast> {
    return this.http.get<WeatherForecast>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
      this.selectedSpot.spotName
      }&units=metric&APPID=529ed471254f7e720df0ecf1580d78cc`
    );
  }
}
