import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonDetails } from './interface';

@Controller('pokemon')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getPokemonDetails(
    @Param('name') name: string,
  ): Promise<PokemonDetails | { error: string }> {
    try {
      const details = await this.appService.getPokemonDetails(name);
      return details;
    } catch (err) {
      console.error('Error in controller:', err);
      throw new HttpException(
        { error: 'Failed to fetch Pokémon details' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
