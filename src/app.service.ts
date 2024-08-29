import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getPokemonDetails(name: string): Promise<any> {
    try {
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
      );

      const data = response.data;

      return {
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        types: data.types.map((type: any) => type.type.name),
        stats: data.stats.map((stat: any) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
        sprite: data.sprites.front_default,
      };
    } catch (err) {
      console.error('Error fetching data from PokéAPI:', err);
      throw new Error('Failed to fetch Pokémon details');
    }
  }
}
