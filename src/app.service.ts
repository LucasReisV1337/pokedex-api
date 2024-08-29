import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PokemonData, PokemonDetails } from './interface';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getPokemonDetails(name: string): Promise<PokemonDetails> {
    try {
      const response: AxiosResponse<PokemonData> = await firstValueFrom(
        this.httpService.get<PokemonData>(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        ),
      );

      const data = response.data;

      return {
        abilities: data.abilities.map((ability) => ability.ability.name),
        types: data.types.map((type) => type.type.name),
        stats: data.stats.map((stat) => ({
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
