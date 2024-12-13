import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { CardBorderDirective } from "./card-border.directive";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonService } from "./pokemon.service";
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';

const pokemonRoutes: Routes = [
    { path: "edit/pokemon/:id", component: EditPokemonComponent },
    { path: "pokemon/add", component: AddPokemonComponent },
    { path: "pokemons", component: PokemonListComponent },
    { path: "pokemon/:id", component: PokemonDetailComponent },
];

@NgModule({
    declarations: [
        CardBorderDirective,
        PokemonTypeColorPipe,
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        SearchPokemonComponent,
        LoaderComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
    providers: [PokemonService],
})
export class PokemonModule {}
