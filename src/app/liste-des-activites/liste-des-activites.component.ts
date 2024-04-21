import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { ProjetsService } from '../projets.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-des-activites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-des-activites.component.html',
  styleUrl: './liste-des-activites.component.css'
})
export class ListeDesActivitesComponent {

  itemId: any;
  item: any;
  nbAct:any;

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
      console.log(this.item);
    });
    this.nbAct=this.item.activites.length;
    console.log(this.nbAct);
    
  }

}
