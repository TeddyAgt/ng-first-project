import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
        private router: Router,
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

    goToEditPokemon(pokemon: Pokemon) {
        this.router.navigate(["edit/pokemon", pokemon.id]);
    }

    deletePokemon(pokemon: Pokemon) {
        this.pokemonService
            .deletePokemon(pokemon.id)
            .subscribe(() => this.router.navigate(["/pokemons"]));
    }
}
