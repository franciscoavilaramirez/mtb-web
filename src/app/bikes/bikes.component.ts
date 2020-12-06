import { IBike } from './../bikes.service';
import { Component, Input, OnInit } from '@angular/core';
import { BikesService,  IReview, INewReview } from '../bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: IBike[] = [];
  review: IReview[] = [];
  bikesssss;
  reviews: INewReview[] = [];

  constructor(private bikesService: BikesService) { }

  ngOnInit(): void {
    this.getBikes();
    //this.bikes = this.bikesService.getBikes();
    //this.bikesssss = this.bikesService.getBikes();
    //this.reviews = this.bikesService.addReview(this.review);
    this.reviews = this.bikesService.reviews;

  }
getBikes() {
  this.bikes = this.bikesService.getBikes();
}

}
