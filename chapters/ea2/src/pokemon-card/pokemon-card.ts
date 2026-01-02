import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pokemon} from '../app/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
  @Input() pokemon!: Pokemon;
}
