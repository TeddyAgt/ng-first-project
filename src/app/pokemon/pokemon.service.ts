import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon.model";

@Injectable()
export class PokemonService {
    constructor() {}

    getPokemonList(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number): Pokemon | undefined {
        return POKEMONS.find((pokemon) => pokemon.id === id);
    }

    getPokemonTypeList(): string[] {
        return [
            "Plante",
            "Feu",
            "Eau",
            "Insecte",
            "Normal",
            "Eletrik",
            "Poison",
            "Fée",
            "Vol",
            "Combat",
            "Psy",
        ];
    }
}
