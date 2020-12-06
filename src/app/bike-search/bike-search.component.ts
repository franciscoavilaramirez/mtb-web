import { BikesService, IBike } from './../bikes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeComponent } from '../bike/bike.component';


@Component({
  selector: 'app-bike-search',
  templateUrl: './bike-search.component.html',
  styleUrls: ['./bike-search.component.css']
})
export class BikeSearchComponent implements OnInit {

  bikes: any[] = [];
  term: string;

  constructor(private activatedRoute: ActivatedRoute,
              private bikesService: BikesService) { }

ngOnInit() {

     this.activatedRoute.params.subscribe( params => {
            this.term = (params.nameBike);
            this.bikes = this.bikesService.bikesSearch( params.nameBike );
            console.log('Estas son las bicis con el termino especificado:', this.bikes);
 });
  }


}
