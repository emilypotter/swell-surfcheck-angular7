import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DropdownModule } from "primeng/dropdown";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: []
})
export class AppModule {}
