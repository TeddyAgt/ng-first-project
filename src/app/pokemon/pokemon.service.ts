import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "./pokemon.model";

@Injectable()
export class PokemonService {
    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>("api/pokemons").pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );
    }

    getPokemon(id: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined))
        );
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-type": "application/json",
            }),
        };
        return this.http
            .post<Pokemon>("api/pokemons", pokemon, httpOptions)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, null))
            );
    }

    updatePokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-type": "application/json",
            }),
        };
        return this.http.put("api/pokemons", pokemon, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    deletePokemon(id: number): Observable<null> {
        return this.http.delete(`api/pokemons/${id}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    private log(response: any): void {
        console.table(response);
    }

    private handleError(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue);
    }

    getPokemonTypeList(): string[] {
        return [
            "Plante",
            "Feu",
            "Eau",
            "Insecte",
            "Normal",
            "Electrik",
            "Poison",
            "Fée",
            "Vol",
            "Combat",
            "Psy",
        ];
    }
}
