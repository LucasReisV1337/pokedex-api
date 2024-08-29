import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getPokemonAbilities(name: string): Promise<string[]> {
    try {
      const response: AxiosResponse = await this.httpService
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .toPromise();
      const abilities = response.data.abilities.map(
        (ability) => ability.ability.name,
      );
      return abilities.sort();
    } catch (err) {
      console.error('Error fetching data from PokéAPI:', err);
      throw new Error('Failed to fetch abilities');
    }
  }
}
