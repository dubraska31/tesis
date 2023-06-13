import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {

  comidas: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.heroService.getHeroes()
      .subscribe(comidas => this.comidas = comidas);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(comida => {
        this.comidas.push(comida);
      });
  }

  delete(comida: Hero): void {
    this.comidas = this.comidas.filter(c => c !== comida);
    this.heroService.deleteHero(comida.id).subscribe();
  }

}
