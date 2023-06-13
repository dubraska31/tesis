import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Sorrentinos', image: '../../assets/sorrentino.jpg' },
      { id: 2, name: 'Hamburguesas', image: '../../assets/hamburguesa.jpg' },
      { id: 3, name: 'Tequeños', image: '../../assets/tequenos.jpg' },
      { id: 4, name: 'Coca cola', image: '../../assets/cocaCola.jpg' },
      { id: 5, name: 'Sprite zero', image: '../../assets/spriteZero.jpg' },
      { id: 6, name: 'Arroz chino' },
      { id: 7, name: 'Shawarma', image: '../../assets/shawarma.jpg' },
      { id: 8, name: 'Milanesa' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
