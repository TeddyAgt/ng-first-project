import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon.model";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-edit-pokemon",
    standalone: false,
    templateUrl: "./edit-pokemon.component.html",
    styleUrl: "./edit-pokemon.component.scss",
})
export class EditPokemonComponent implements OnInit {
    pokemon: Pokemon | undefined;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

        if (pokemonId) {
            this.pokemonService
                .getPokemon(+pokemonId)
                .subscribe((pokemon) => (this.pokemon = pokemon));
        }
    }
}
