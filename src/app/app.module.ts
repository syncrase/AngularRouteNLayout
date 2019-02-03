import './vendor.ts';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { MainComponent, NavbarComponent, FooterComponent, ErrorComponent } from './layouts';
import { SharedModule } from 'app/shared';
import { EntityModule } from './entities/backend/entity.module';
import { AdminModule } from './admin/admin.module';
import { ViewsModule } from './views/views.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
// import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot(),
    CustomRoutingModule,
    EntityModule,
    HomeModule,
    AdminModule,
    ViewsModule
    // ,
    // StoreModule.forRoot(reducers, { metaReducers })
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
