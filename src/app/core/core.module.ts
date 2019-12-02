import { NgModule, ModuleWithProviders } from '@angular/core';
import { MessageService } from './message.service';
import { TestComponent } from './test/test.component';


@NgModule ({
  imports: [],
  declarations: [TestComponent],
  providers: [MessageService],
  exports: [TestComponent]
})

export class CoreModule {}