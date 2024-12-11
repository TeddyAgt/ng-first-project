import { Component } from "@angular/core";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon.model";

@Component({
    selector: "app-pokemon-list",
    standalone: false,

    templateUrl: "./pokemon-list.component.html",
})
export class PokemonListComponent {
    pokemons: Pokemon[] = POKEMONS;
    selectedPokemon: Pokemon | undefined;

    selectPokemon(pokemonId: String) {
        this.selectedPokemon = this.pokemons.find(
            (pokemon) => pokemon.id === +pokemonId
        );
    }
}
