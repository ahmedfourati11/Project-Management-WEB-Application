import { Component, OnInit } from '@angular/core';
// import { Projet, Activite } from '../model';
// import { ProjetService } from '../projet.service';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-nvproj',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterModule,FormsModule],
  templateUrl: './nvproj.component.html',
  styleUrls: ['./nvproj.component.css']
})
export class NvprojComponent implements OnInit {

  nombre: number = 0;
  liste: number[] = [];
  projects: any = {};
  activities: any[] = [];

  ngOnInit(): void {
    this.updateListe();
  }

  updateListe(): void {
    this.liste = [];
    for (let index = 1; index <= this.nombre; index++) {
      this.liste.push(index);
    }
  }

  onSubmit(form: NgForm) {
    // Réinitialiser les objets
    this.projects = {};
    this.activities = [];

    // Récupérer les valeurs des champs du formulaire
    const formData = form.value;

    // Extraire les champs du projet
    this.projects.nom_du_Projet = formData.nom_du_Projet;
    this.projects.date_depart_projet = formData.date_depart_projet;
    this.projects.date_fin_projet = formData.date_fin_projet;
    this.projects.budget_projet = formData.budget_projet;
    this.projects.coordinateur_projet = formData.coordinateur_projet;
    this.projects.rapport_projet = formData.rapport_projet;
    this.projects.nombre_dactivite = formData.nombre_dactivite;

    // Extraire les champs des activités
    for (let i = 1; i <= this.nombre; i++) {
      const activity = {
        numero_actvite:i,
        nom_activite: formData['nom_act_' + i],
        budget_activite: formData['budget_act_' + i],
        date_Debut_activite: formData['date_Debut_act_' + i],
        date_Fin_activite: formData['date_Fin_act_' + i],
        lieu_activite: formData['lieu_act_' + i],
        rapport_activite: formData['rapport_act_' + i]
        // Ajoutez d'autres champs d'activité si nécessaire
      };
      this.activities.push(activity);
    }

    // Afficher les objets dans la console ou faire autre chose avec eux
    console.log('Projet:', this.projects);
    console.log('Activités:', this.activities);
  }
}