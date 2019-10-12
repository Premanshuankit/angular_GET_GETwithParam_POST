import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { FreeApiService } from './services/free-api.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PostmethodComponent } from './components/postmethod/postmethod.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    PagenotfoundComponent,
    PostmethodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
