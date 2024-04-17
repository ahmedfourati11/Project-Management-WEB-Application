import { Component, OnInit } from '@angular/core';
import { Projet, Activite } from '../model';
import { ProjetService } from '../projet.service';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nvproj',
  standalone:true,
  // standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,FormsModule],
  templateUrl: './nvproj.component.html',
  styleUrls: ['./nvproj.component.css']
})
export class NvprojComponent implements OnInit {
  projet: Projet = {
    id: 0,
    nom: '',
    dateDebut: new Date(),
    dateFin: new Date(),
    budget: 0,
    coordinateur: '',
    rapport: '',
    activites: []
  };

  liii =[{id_proj:1,nom_proj:"rifagereb"}];

  updateliii(){
    this.liii.push({id_proj:2,nom_proj:"teeest"});  
    console.log(this.liii);
    
  }
  nombre: number = 0;
  liste: number[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.updateListe();
    this.projet.activites = [];
  }

  updateListe(): void {
    this.liste = [];
    for (let index = 1; index <= this.nombre; index++) {
      this.liste.push(index);
    }
    console.log(this.liste);
  }

  ajouterProjet(): void {
    this.projetService.ajouterProjet(this.projet);
    this.projet = {
      id: 0,
      nom: '',
      dateDebut: new Date(),
      dateFin: new Date(),
      budget: 0,
      coordinateur: '',
      rapport: '',
      activites: []
    };
  }

  ajouterActivite(): void {
    this.projet.activites.push({ nom: '', budget: 0, dateDebut: new Date(), dateFin: new Date(), lieu: '' });
    this.updateListe();
  }
}

