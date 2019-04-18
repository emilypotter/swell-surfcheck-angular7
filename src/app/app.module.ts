import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { FormsModule } from '@angular/forms';
import { SpotListComponent } from './components/spot-list/spot-list.component';
import { SpotService } from './services/spot.service';
import { NgxLoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpotDetailComponent } from './components/spot-detail/spot-detail.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherService } from './services/weather.service';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBrowserModule } from './app.browser.module';

@NgModule({
  declarations: [AppComponent, HomeComponent,
    NavbarComponent, CallbackComponent, SpotListComponent, SpotDetailComponent, CurrentConditionsComponent, ForecastComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,

    TransferHttpCacheModule,
    HttpClientModule,

    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule,
    FontAwesomeModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    InfiniteScrollModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    CarouselModule,

    BrowserAnimationsModule

  ],
  providers: [SpotService, WeatherService]
})
export class AppModule { }
