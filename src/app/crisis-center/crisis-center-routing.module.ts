import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterDetailComponent } from './crisis-center-detail/crisis-center-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterListComponent } from './crisis-center-list/crisis-center-list.component';

const crisisCenterRoutes: Routes = [
  { path: '', 
    component: CrisisCenterComponent, 
    children: [
      {
        path: '',
        component: CrisisCenterListComponent,
        children: [          
          {
            path: ':id',
            component: CrisisCenterDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class CrisisCenterRoutingModule { }