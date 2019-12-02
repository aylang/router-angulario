import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

const admintRoutes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      { path: '/Dashboard', component: AdminDashboardComponent },
      { path: '/Crises', component: ManageCrisesComponent },
      { path: '/Heroes', component: ManageHeroesComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(admintRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }