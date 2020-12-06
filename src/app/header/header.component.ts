import { BikesService } from './../bikes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) {  }

  ngOnInit(): void {
  }

  bikeSearch(termino: string) {
     // console.log(termino);
        this.router.navigate( ['/search', termino] );
  }

}
