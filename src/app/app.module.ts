import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikesComponent } from './bikes/bikes.component';
import { BikeComponent } from './bike/bike.component';
import { BikesService } from './bikes.service';
import { BikeSearchComponent } from './bike-search/bike-search.component';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    BikesComponent,
    BikeComponent,
    BikeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
