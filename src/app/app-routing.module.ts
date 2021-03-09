import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EqipDetailsComponent } from './eqip-details/eqip-details.component';


const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'EqipDetail/:id', component:EqipDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
