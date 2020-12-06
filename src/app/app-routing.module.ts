import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BikeSearchComponent } from './bike-search/bike-search.component';
import { BikeComponent } from './bike/bike.component';
import { BikesComponent } from './bikes/bikes.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path: '' , component: BikesComponent },
  {path: 'Bike/:id' , component: BikeComponent},
  {path: 'search/:nameBike' , component: BikeSearchComponent },

  {path: 'customersForm' , component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
