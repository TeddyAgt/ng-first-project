import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    pokemons: Pokemon[] = POKEMONS;
    selectedPokemon: Pokemon | undefined;

    ngOnInit(): void {
        console.table(this.pokemons);
    }

    selectPokemon(pokemonId: String) {
        this.selectedPokemon = this.pokemons.find(
            (pokemon) => pokemon.id === +pokemonId
        );
    }
}
