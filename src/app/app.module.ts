import './vendor.ts';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { MainComponent, NavbarComponent, FooterComponent, ErrorComponent } from './layouts';
import { SharedModule } from 'app/shared';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    CustomRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
