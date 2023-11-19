import { Component, Input } from '@angular/core';
import { CommonModule, Location} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  hero?: Hero;

  constructor(private _route: ActivatedRoute, private _heroService: HeroService, private _location: Location) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this._location.back();
  }

}
