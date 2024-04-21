import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  private readonly STORAGE_KEY = 'projets';

  constructor() { }

  getProjets(): any[] {
    const projetsData = localStorage.getItem(this.STORAGE_KEY);
    return projetsData ? JSON.parse(projetsData) : [];
  }

  addProjet(projet: any): void {
    let projets = this.getProjets();
    projets.push(projet);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projets));
  }

  supprimerProjet(projetId: number): void {
    let projets = this.getProjets();
    projets = projets.filter(projet => projet.numero_du_projet !== projetId); 
    console.log(projets);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projets));
  }
}
