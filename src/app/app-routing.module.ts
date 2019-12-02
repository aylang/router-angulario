import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [ 
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  }, 
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  }, 
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule)
  },
  {
    path: '', 
    redirectTo: '/superheroes',  
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  declarations: [PageNotFoundComponent],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }