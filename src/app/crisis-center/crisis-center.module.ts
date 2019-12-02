import { NgModule } from '@angular/core';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterListComponent } from './crisis-center-list/crisis-center-list.component';
import { CrisisCenterDetailComponent } from './crisis-center-detail/crisis-center-detail.component';

@NgModule({
  imports:      [ CrisisCenterRoutingModule ],
  declarations: [ CrisisCenterComponent, CrisisCenterHomeComponent, CrisisCenterListComponent, CrisisCenterDetailComponent ]
})
export class CrisisCenterModule { }