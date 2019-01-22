import './vendor.ts';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { MainComponent, NavbarComponent, FooterComponent, ErrorComponent } from './layouts';
import { SharedModule } from 'app/shared';
import { EntityModule } from './entities/backend/entity.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    // CommonModule,
    HttpClientModule,
    SharedModule.forRoot(),
    CustomRoutingModule,
    HomeModule,
    EntityModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
