import { Component } from "@angular/core";
import { Router } from "@angular/router";
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

    constructor(private router: Router) {}

    selectPokemon(pokemonId: String) {
        this.selectedPokemon = this.pokemons.find(
            (pokemon) => pokemon.id === +pokemonId
        );
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(["/pokemon", pokemon.id]);
    }
}
