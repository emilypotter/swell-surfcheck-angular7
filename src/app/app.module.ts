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
import { Auth0LockService } from './services/auth0-lock.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpotListComponent } from './components/spot-list/spot-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,
    NavbarComponent, LoginComponent, CallbackComponent, SpotListComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule,
    FontAwesomeModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [Auth0LockService]
})
export class AppModule { }
