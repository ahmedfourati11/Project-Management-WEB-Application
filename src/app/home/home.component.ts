import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjetsService } from '../projets.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(private projetsService: ProjetsService){}

OnInit():void{

}

  CheckAlerts(){
    // for (let index = 0; index < this.projetsService.lenght; index++) {
    // }
  }
}
