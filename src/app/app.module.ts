import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FreeApiService } from './services/free-api.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
