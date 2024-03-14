import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailviewComponent } from './components/detailview/detailview.component';
import { AddComponent } from './components/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailviewComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbTypeaheadModule, 
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true
    },
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
