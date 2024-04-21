import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { ProjetsService } from '../projets.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-du-projet',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,FormsModule],
  templateUrl: './details-du-projet.component.html',
  styleUrl: './details-du-projet.component.css'
})
export class DetailsDuProjetComponent {
  itemId: any;
  item: any;

  constructor(
    private route: ActivatedRoute,
    private projetsService: ProjetsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      console.log(this.itemId);
      this.item=  this.projetsService.getProjets().find(el => el.numero_du_projet==this.itemId);
      // console.log(this.item);
    });
  }

  onSubmit(form: NgForm) {
    if((this.item.rapport_projet=="y"||this.item.rapport_projet=="n")&&this.item.date_fin_projet >= this.item.date_depart_projet){
    // Mise à jour des données du projet
    this.projetsService.updateProjet(this.item);

    // Navigation vers la liste de tous les projets
    this.router.navigate(['all_projects']);
    console.log(this.item);
  }
  else{
    alert("Vérifier Vos Données")
  } }

}
