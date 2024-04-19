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
  projects:any={};

  ngOnInit(): void {
    this.updateListe();
  }

  updateListe(): void {
    this.liste = [];
    for (let index = 1; index <= this.nombre; index++) {
      this.liste.push(index);
    } }

  onSubmit(form: NgForm) {
  
    console.log(this.projects);
  }  

}

