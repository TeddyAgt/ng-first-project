import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
    debounceTime,
    distinctUntilChanged,
    Observable,
    Subject,
    switchMap,
} from "rxjs";
import { Pokemon } from "../pokemon.model";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-search-pokemon",
    standalone: false,
    templateUrl: "./search-pokemon.component.html",
    styleUrl: "./search-pokemon.component.scss",
})
export class SearchPokemonComponent implements OnInit {
    searchQueries = new Subject<string>();
    pokemons$: Observable<Pokemon[]>;

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        this.pokemons$ = this.searchQueries.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((query) => this.pokemonService.searchPokemonList(query))
        );
    }

    search(query: string) {
        this.searchQueries.next(query);
    }

    goToDetail(pokemon: Pokemon) {
        this.router.navigate(["/pokemon", pokemon.id]);
    }
}
