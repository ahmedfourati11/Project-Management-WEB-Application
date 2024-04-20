import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProjetsService } from '../projets.service';

@Component({
  selector: 'app-allproj',
  standalone: true,
  imports: [RouterModule,CommonModule,RouterLink],
  templateUrl: './allproj.component.html',
  styleUrl: './allproj.component.css'
})
export class AllprojComponent implements OnInit {
  projets: any[] = [];
  projetASupprimer: any = null;

  constructor(private projetsService: ProjetsService) { }

  ngOnInit(): void {
    this.projets = this.projetsService.getProjets();
  }

  modal(projetId: number): void {
    this.projetASupprimer = projetId;
  }

  supprimerProjet(): void {
    if (this.projetASupprimer !== null) {
      this.projetsService.supprimerProjet(this.projetASupprimer);
      // Filtrer les projets pour supprimer le projet avec l'ID correspondant
      this.projets = this.projets.filter(projet => projet.id !== this.projetASupprimer);
      console.log('Liste des projets après suppression :', this.projets);
      this.projetASupprimer = null;
    }
  }
}
  
