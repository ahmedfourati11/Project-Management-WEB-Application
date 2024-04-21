import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { ProjetsService } from '../projets.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

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

  constructor(private route: ActivatedRoute,private projetsService: ProjetsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      console.log(this.itemId);
      this.item=  this.projetsService.getProjets().find(el => el.numero_du_projet==this.itemId);
      console.log(this.item);
    });
  }

}
