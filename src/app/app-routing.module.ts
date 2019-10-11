import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsersComponent } from './components/users/users.component';
// import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import {RoutesConfig} from './configs/routes.config';

// const routesNames = RoutesConfig.routesNames;


const routes: Routes = [
  // { path: '', component: UsersComponent },
  // { path: 'sidebar', component: SidebarComponent },
  // { path: '**', component: PagenotfoundComponent },
  // {path: routesNames.home, component: UsersComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
