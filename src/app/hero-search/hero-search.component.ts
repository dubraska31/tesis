import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { UtilService } from '../util-service';
import { Menu } from '../menu';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  menus$!: Observable<Menu[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService,
    private utilService: UtilService) {
  }

  ngOnInit(): void {
    // this.menus$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  agregarAlCarrito(menu: Menu): void {
    const confirmarAgregar = confirm('¿Desea agregar al carrito?');

    if (confirmarAgregar) {
      this.utilService.agregarComidaCarrito(menu);
      alert('Agregado al carrito!');
    }
  }


}
