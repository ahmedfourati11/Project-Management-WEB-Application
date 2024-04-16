import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NvprojComponent } from './nvproj/nvproj.component';
import { AllprojComponent } from './allproj/allproj.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"new_project", component:NvprojComponent},
    {path:"all_projects", component:AllprojComponent}
];
