import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon.model";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-pokemon-form",
    standalone: false,
    styleUrl: "./pokemon-form.component.scss",
    templateUrl: "./pokemon-form.component.html",
})
export class PokemonFormComponent implements OnInit {
    @Input() pokemon: Pokemon;
    types: string[];

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {}

    ngOnInit(): void {
        this.types = this.pokemonService.getPokemonTypeList();
    }

    hasType(type: string): boolean {
        return this.pokemon.types.includes(type);
    }

    selectType($event: Event, type: string): void {
        const isChecked: boolean = ($event.target as HTMLInputElement).checked;

        if (isChecked) {
            this.pokemon.types.push(type);
        } else {
            const index = this.pokemon.types.indexOf(type);
            this.pokemon.types.splice(index, 1);
        }
    }

    isTypeValid(type: string): boolean {
        if (this.pokemon.types.length === 1 && this.hasType(type)) {
            return false;
        }

        if (this.pokemon.types.length === 3 && !this.hasType(type)) {
            return false;
        }

        return true;
    }

    onSubmit() {
        this.pokemonService.updatePokemon(this.pokemon).subscribe((pokemon) => {
            this.router.navigate(["/pokemon", this.pokemon.id]);
        });
    }
}
