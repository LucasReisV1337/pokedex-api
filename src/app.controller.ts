import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pokemon')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getPokemonDetails(@Param('name') name: string) {
    try {
      const details = await this.appService.getPokemonDetails(name);
      return details;
    } catch (err) {
      console.error('Error in controller:', err);
      return { error: 'Failed to fetch Pokémon details' };
    }
  }
}
