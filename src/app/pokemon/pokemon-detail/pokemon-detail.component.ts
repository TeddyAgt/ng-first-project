import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon.model";

@Component({
    selector: "app-pokemon-detail",
    standalone: false,
    templateUrl: "./pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit {
    pokemonList: Pokemon[];
    pokemon: Pokemon | undefined;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.pokemonList = POKEMONS;
        const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

        if (pokemonId) {
            this.pokemon = this.pokemonList.find(
                (pokemon) => pokemon.id === +pokemonId
            );
        }
    }
}
