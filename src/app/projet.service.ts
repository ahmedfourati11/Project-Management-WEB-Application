import { Injectable } from '@angular/core';
import { Projet, Activite } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projets: Projet[] = [];

  constructor() { }

  ajouterProjet(projet: Projet): void {
    this.projets.push(projet);
  }

  getProjets(): Projet[] {
    return this.projets;
  }

  // Vous pouvez implémenter d'autres méthodes pour mettre à jour et supprimer des projets au besoin
}
