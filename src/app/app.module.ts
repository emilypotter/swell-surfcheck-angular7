import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgtUniversalModule } from "@ng-toolkit/universal";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxLoadingModule } from 'ngx-loading';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from "primeng/dropdown";
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgStreamingModule } from 'videogular2/streaming';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CallbackComponent } from './components/callback/callback.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpotDetailComponent } from './components/spot-detail/spot-detail.component';
import { SpotListComponent } from './components/spot-list/spot-list.component';
import { SpotService } from './services/spot.service';
import { WeatherService } from './services/weather.service';
import { NearbySpotsComponent } from './components/nearby-spots/nearby-spots.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { StarRatingModule } from 'angular-star-rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatAutocompleteModule, MatInputModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SpotMapComponent } from './components/spot-map/spot-map.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,
    NavbarComponent, CallbackComponent, SpotListComponent, SpotDetailComponent, CurrentConditionsComponent, ForecastComponent, NearbySpotsComponent, SpotMapComponent],
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
    NgxGalleryModule,
    BrowserAnimationsModule,
    NgxSmartModalModule.forRoot(),
    StarRatingModule.forRoot(),
    ScrollPanelModule,
    TooltipModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatSelectModule

  ],
  providers: [SpotService, WeatherService]
})
export class AppModule { }
