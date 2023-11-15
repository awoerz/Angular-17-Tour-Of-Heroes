import { Component, Input } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
