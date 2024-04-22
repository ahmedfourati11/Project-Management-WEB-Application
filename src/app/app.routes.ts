import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NvprojComponent } from './nvproj/nvproj.component';
import { AllprojComponent } from './allproj/allproj.component';
import { ListeDesActivitesComponent } from './liste-des-activites/liste-des-activites.component';
import { DetailsDeLactiviteComponent } from './details-de-lactivite/details-de-lactivite.component';
import { ConfirmerLaSuppressionComponent } from './confirmer-la-suppression/confirmer-la-suppression.component';
import { DetailsDuProjetComponent } from './details-du-projet/details-du-projet.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"new_project", component:NvprojComponent},
    {path:"all_projects", component:AllprojComponent},
    {path:"liste_des_activite/:id", component:ListeDesActivitesComponent},
    {path:"details_de_lactivite/:projetId/:activiteId", component:DetailsDeLactiviteComponent},
    {path:"details_du_projet/:id", component:DetailsDuProjetComponent},
    {path:"confirmer_la_suppression_du_projet", component:ConfirmerLaSuppressionComponent}
];
