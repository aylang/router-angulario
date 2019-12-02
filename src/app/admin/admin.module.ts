import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminDashboardComponent, ManageCrisesComponent, ManageHeroesComponent]
})
export class AdminModule { }