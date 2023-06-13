import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  comidas: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getComidas();
  }

  getComidas(): void {
    this.heroService.getHeroes()
      .subscribe(comidas => this.comidas = comidas);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
