import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon.model";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-pokemon-detail",
    standalone: false,
    templateUrl: "./pokemon-detail.component.html",
})
export class PokemonDetailComponent implements OnInit {
    pokemonList: Pokemon[];
    pokemon: Pokemon | undefined;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

        if (pokemonId) {
            this.pokemon = this.pokemonService.getPokemon(+pokemonId);
        }
    }
}
