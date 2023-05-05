import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteriesSupportComponent } from './features/batteries-support/batteries-support.component';
import { HomePageComponent } from './layout/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'batteries-support', component: BatteriesSupportComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
