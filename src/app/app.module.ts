import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventModule } from './modules/event/event.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      ToolBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      EventModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
