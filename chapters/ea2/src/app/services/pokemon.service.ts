import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import { Pokemon } from '../pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient){}

  // Fetches a list of 20 pokemon and their full details
  getPokemonList(limit: number = 20): Observable<Pokemon[]>{
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}`).pipe(mergeMap((response)=>{
      // PokeAPI initially return only names and URLs.
      // We need to fetch each individual URL to get images/HP.
      const detailRequests: Observable<Pokemon>[]= response.results.map((p:any)=>this.http.get<any>(p.url).pipe(
        map(data=> ({
          name: data.name,
          hp: data.stats[0].base_stat,
          type: data.types[0].type.name,
          imageUrl: data.sprites.other['official-artwork'].front_default,
          ability: data.abilities[0].ability.name,
          description: `A ${data.types[0].type.name} type Pokemon`
        }))
      ));
      return forkJoin(detailRequests);
    }));
  }
}
