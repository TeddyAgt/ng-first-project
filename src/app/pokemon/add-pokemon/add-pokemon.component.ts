import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon.model";

@Component({
    selector: "app-add-pokemon",
    standalone: false,

    templateUrl: "./add-pokemon.component.html",
})
export class AddPokemonComponent implements OnInit {
    pokemon: Pokemon;

    ngOnInit(): void {
        this.pokemon = new Pokemon();
    }
}
