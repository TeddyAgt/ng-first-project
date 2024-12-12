import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon.model";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-pokemon-list",
    standalone: false,
    templateUrl: "./pokemon-list.component.html",
})
export class PokemonListComponent implements OnInit {
    pokemons: Pokemon[];

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        this.pokemons = this.pokemonService.getPokemonList();
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(["/pokemon", pokemon.id]);
    }
}
