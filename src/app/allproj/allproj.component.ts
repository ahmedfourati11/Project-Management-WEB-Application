import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-allproj',
  standalone: true,
  imports: [RouterModule,CommonModule,RouterLink],
  templateUrl: './allproj.component.html',
  styleUrl: './allproj.component.css'
})
export class AllprojComponent {

  verif :boolean=false;
  modal():void{
    this.verif=true;
  }
}
