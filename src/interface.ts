export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonData {
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}

export interface PokemonDetails {
  abilities: string[];
  types: string[];
  stats: {
    name: string;
    value: number;
  }[];
  sprite: string;
}
