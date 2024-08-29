import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pokemon')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getPokemonAbilities(@Param('name') name: string) {
    try {
      const abilities = await this.appService.getPokemonAbilities(name);
      return { abilities };
    } catch (err) {
      console.error('Error in controller:', err);
      return { error: 'Failed to fetch abilities' };
    }
  }
}
