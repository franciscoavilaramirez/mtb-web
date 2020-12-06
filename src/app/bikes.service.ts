
import { BikesComponent } from './bikes/bikes.component';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { BikeComponent } from './bike/bike.component';
import { Url } from 'url';



@Injectable({
  providedIn: 'root'
})
export class BikesService {


reviews = [
  {name: 'paco', comments: 'muy bueno', stars: 5},
  {name: 'ana', comments: 'muy bueno', stars: 555555},
];

bikes = [
      {id: 0 , make: 'orbea', frame: 'Carbono OMX',
          inch: 29 , suspension: 'Fox 32 Float SC Factory',
          brakes: 'Shimano XT M8100', price: 2990, image: '/assets/orbea_alma.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'La bicicleta de montaña con cuadro de carbono Orbea Alma M-LTD 29 2021 ROS-NEG está fabricada para dar las vueltas más veloces, subir las pendientes más pronunciadas, realizar las mayores aceleraciones y soportar las más elevadas altitudes. Hecha para enfrentarse a los competidores más fieros, las etapas más exigentes y las condiciones más duras. Para atletas que sólo se conforman con lo máximo, para quienes unos pocos segundos marcan la diferencia. La Alma es para los más rápidos.',
          review: [{name: 'antonio', comments: 'bueno', stars: 5555}],
      },
      {id: 1 , make: 'cube', frame: 'Monocoque Advanced Twin Mold',
          inch: 29 , suspension: 'RockShox Reba RL Air',
          brakes: 'Shimano XT BR-M8000', price: 1990, image: '/assets/cube_reaction_eagle.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Esta bicicleta rígida de alto rendimiento desprende carácter competitivo por cada uno de los tubos y componentes de su cuadro, de ahí que se haya ganado el sobrenombre de «Race». Y sí, es tan rápida como parece. Con nuestro cuadro C:62 Reaction cuidadosamente elaborado y una completa selección de componentes destinados a las carreras, esta bicicleta posee todo lo que un corredor con aspiraciones podría necesitar para subirse al podio. La horquilla RockShox Reba con bloqueo remoto, la transmisión Sram Eagle 1x12 y frenos de disco hidráulicos Shimano XT, el juego de ruedas Red 55 calzadas con cubiertas Schwalbe y los componentes Newmen del puesto de mando: no hay duda de que esta bicicleta te permitirá rendir al máximo. ¿Estás listo para poner a prueba tus límites? Porque, sin ninguna duda, la Reaction C:62 lo está.',
          review: [{name: 'pepe', comments: 'muy malo', stars: 5}],
      },
        {id: 2 , make: 'olympia', frame: 'Carbono OMX',
          inch: 29 , suspension: 'Fox 32 Float SC Factory',
          brakes: 'Shimano XT M8100', price: 2990, image: '/assets/olympia_f1.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Está bicicleta creada para el  XC con la idea de usarla en el bike-maraton intentando  ir lo más rápido y confortable  posible. Este es el campo de batalla de la nueva Olympia F1. Una bicicleta en 29 pulgadas de carbono que se convertirá en el modelo tope de gama de Olympia para el XC y que no oculta sus pretensiones: ser veloz a cualquier precio.',
          review: [{name: 'Ana', comments: 'excelente', stars: 3}],
      },
      {id: 3 , make: 'trek', frame: 'Carbono OMX',
          inch: 29 , suspension: 'Fox 32 Float SC Factory',
          brakes: 'Shimano XT M8100', price: 2990, image: '/assets/trek.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Está bicicleta creada para el  XC con la idea de usarla en el bike-maraton intentando  ir lo más rápido y confortable  posible. Este es el campo de batalla de la nueva Olympia F1. Una bicicleta en 29 pulgadas de carbono que se convertirá en el modelo tope de gama de Olympia para el XC y que no oculta sus pretensiones: ser veloz a cualquier precio.',
          review: [{name: 'Ana', comments: 'excelente', stars: 3}],
    },
    {id: 4 , make: 'megamo', frame: 'Carbono OMX',
          inch: 29 , suspension: 'Fox 32 Float SC Factory',
          brakes: 'Shimano XT M8100', price: 2990, image: '/assets/megamo.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Está bicicleta creada para el  XC con la idea de usarla en el bike-maraton intentando  ir lo más rápido y confortable  posible. Este es el campo de batalla de la nueva Olympia F1. Una bicicleta en 29 pulgadas de carbono que se convertirá en el modelo tope de gama de Olympia para el XC y que no oculta sus pretensiones: ser veloz a cualquier precio.',
          review: [{name: 'Ana', comments: 'excelente', stars: 3}],
  },
  {id: 5 , make: 'cannondale', frame: 'Carbono OMX',
          inch: 29 , suspension: 'Fox 32 Float SC Factory',
          brakes: 'Shimano XT M8100', price: 2990, image: '/assets/cannondale.jpg',
          // tslint:disable-next-line: max-line-length
          description: 'Está bicicleta creada para el  XC con la idea de usarla en el bike-maraton intentando  ir lo más rápido y confortable  posible. Este es el campo de batalla de la nueva Olympia F1. Una bicicleta en 29 pulgadas de carbono que se convertirá en el modelo tope de gama de Olympia para el XC y que no oculta sus pretensiones: ser veloz a cualquier precio.',
          review: [{name: 'Ana', comments: 'excelente', stars: 3}],
}

    ];
    getBikes(): IBike[] {
        return ( this.bikes );
    }

    getBike(idx: number) {
      return this.bikes[idx];
    }

    bikesSearch(nameBike: string): IBike[] {

        let bikesarr: IBike[] = [];

        for (let bike of this.bikes) {
             let nombrebici = bike.make;

             if ( nombrebici.indexOf(nameBike) >= 0 ) {
                  bikesarr.push(bike);
          }
        }
        return (bikesarr);
}


}

export interface IBike {
  id: number;
  make: string;
  frame: string;
  inch: number;
  suspension: string;
  brakes: string;
  price: number;
  image: string;
  description: string;
  review: IReview [];
}

export interface IReview {
  name: string;
  comments: string;
  stars: number;
}


export interface INewReview {
  name: string;
  comments: string;
  stars: number;
}



