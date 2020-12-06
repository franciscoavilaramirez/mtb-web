import { BikesComponent } from './../bikes/bikes.component';
import { BikesService, IBike } from './../bikes.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  bike: any = [];



  constructor(private activatedRoute: ActivatedRoute,
              private bikesService: BikesService) { }

  ngOnInit() {
   // this.bike = this.bikesService.getBikes();

   this.activatedRoute.params.subscribe ( params => {
     this.bike = this.bikesService.getBike(params.id);
     console.log(this.bike);
   });



}
}
