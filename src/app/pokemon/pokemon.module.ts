import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardBorderDirective } from "./card-border.directive";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

const pokemonRoutes: Routes = [
    { path: "pokemons", component: PokemonListComponent },
    { path: "pokemon/:id", component: PokemonDetailComponent },
];

@NgModule({
    declarations: [
        CardBorderDirective,
        PokemonTypeColorPipe,
        PokemonListComponent,
        PokemonDetailComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}
