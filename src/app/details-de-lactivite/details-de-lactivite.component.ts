import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { ProjetsService } from '../projets.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-de-lactivite',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './details-de-lactivite.component.html',
  styleUrl: './details-de-lactivite.component.css'
})

export class DetailsDeLactiviteComponent {

  projetId:any;
  activiteId:any;
  projet:any;
  activite:any;

  constructor(
    private route: ActivatedRoute,
    private projetsService: ProjetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projetId = params['projetId'];
      this.activiteId = params['activiteId'];
      console.log('Projet ID:', this.projetId);
      console.log('Activité ID:', this.activiteId);     
       this.projet=  this.projetsService.getProjets().find( el => el.numero_du_projet==this.projetId);

       if (this.projet && this.projet.activites) {
       this.activite = [...this.projet.activites].find(a => a.numero_activite == this.activiteId); 
      }

       console.log(this.projet);
       console.log(this.activite);
    });

  }


}
