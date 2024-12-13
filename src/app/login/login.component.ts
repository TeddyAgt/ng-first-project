import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-login",
    standalone: false,
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
    auth: AuthService;
    message: string = "Vous êtes déconnecté";
    username: string;
    password: string;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.auth = this.authService;
    }

    setMessage() {
        if (this.authService.isLoggedIn) {
            this.message = "Vous êtes connecté";
        } else {
            this.message = "Les identifiants sont incorrects";
        }
    }

    login() {
        this.message = "Tentative de connexion en cours...";
        this.authService
            .login(this.username, this.password)
            .subscribe((isLoggedIn: boolean) => {
                this.setMessage();
                if (isLoggedIn) {
                    this.router.navigate(["/pokemons"]);
                } else {
                    this.password = "";
                }
            });
    }

    logout() {
        this.authService.logout();
        this.message = "Vous êtes déconnectés";
    }
}
