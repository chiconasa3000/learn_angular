import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import {Pokemon} from '../app/pokemon.model';
import {PokemonService} from '../app/services/pokemon.service';

@Component({
  selector: 'app-root',
  imports: [PokemonCard, CommonModule],
  providers: [PokemonService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{

  protected readonly title = signal('ea2');
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    console.log('Fetching started...');
    this.pokemonService.getPokemonList(12).subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.pokemonList = data;
      },
      error: (err) => console.error('API error:', err)
    });
  }

}
