import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpotListComponent } from './components/spot-list/spot-list.component';
import { SpotDetailComponent } from './components/spot-detail/spot-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'region', component: SpotListComponent },
  { path: 'spot', component: SpotDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
