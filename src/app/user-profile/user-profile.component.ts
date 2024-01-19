import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName: string = 'John Doe';
  userCode: string = '123456';

  constructor(private router: Router) {}

  logout() {
    // Il faut que j'ajoute ici la logique de déconnexion, comme la suppression du token d'authentification ou la réinitialisation des données utilisateur.

    this.router.navigate(['/login']);
  }
}
