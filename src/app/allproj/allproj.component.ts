import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
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

  constructor(private projetsService: ProjetsService,private router :Router) { }
  navigateToProjectDetails(id : any) {
    this.router.navigate(['details_du_projet', id]);
   }

   navigateToListeOfActivities(id :number){
    this.router.navigate(['liste_des_activite',id])
   }
  ngOnInit(): void {
    this.projets = this.projetsService.getProjets();
  }

  modal(projetId: number): void {
    this.projetASupprimer = projetId;
  }

  supprimerProjet(el : any): void {
    if (this.projetASupprimer !== null) {
      this.projetsService.supprimerProjet(this.projetASupprimer);
      // Filtrer les projets pour supprimer le projet avec l'ID correspondant
      this.projets = this.projets.filter(projet => projet.numero_du_projet !== this.projetASupprimer);
      console.log('Liste des projets après suppression :', this.projets);
      this.projetASupprimer = null;
    }
  
    
  }
}
  
