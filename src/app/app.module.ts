import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesModule } from './heroes/heroes.module';
import { LoginModule } from './Auth/login.module';
import { CoreModule } from './core/core.module';
import { MessageService } from './core/message.service';



import { AppRoutingModule } from './app-routing.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HeroesModule, LoginModule, AppRoutingModule, CoreModule ],
  declarations: [ AppComponent, HelloComponent, ComposeMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MessageService ]
})
export class AppModule { }
