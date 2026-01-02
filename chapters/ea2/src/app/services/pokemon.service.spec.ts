import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PokemonService} from './pokemon.service';

describe('PokemonService',()=>{
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should fetch pokemon list and then fecth details for each', (done)=>{

    const mockListResponse = {
      results: [
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
      ]
    };

    const mockDetailResponse = {
      name: 'bulbasaur',
      stats: [{base_stat: 45}],
      types: [{type: {name: 'grass'}}],
      sprites: {
        other:{
          'official-artwork': {front_default: 'bulb-image.png'}
        }
      },
      abilities: [{ability:{name:'overgrow'}}]
    };

    service.getPokemonList(1).subscribe((pokemon)=>{
      expect(pokemon.length).toBe(1);
      expect(pokemon[0].name).toBe('bulbasaur');
      expect(pokemon[0].hp).toBe(45);
      expect(pokemon[0].imageUrl).toBe('bulb-image.png');
    });

    // 1. Expect the initial list call
    const listReq = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?limit=1');
    expect(listReq.request.method).toBe('GET');
    listReq.flush(mockListResponse);

    // 2. Expect the detail call triggered by the first response
    const detailReq = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1/');
    expect(detailReq.request.method).toBe('GET');
    detailReq.flush(mockDetailResponse);

  });

});
