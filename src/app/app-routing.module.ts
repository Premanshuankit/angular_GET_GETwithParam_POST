import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostmethodComponent } from './components/postmethod/postmethod.component';



const routes: Routes = [
  { path: 'getwithoutparam', component: UsersComponent },
  { path: 'getwithparam', component: SidebarComponent },
  { path: 'postmethod', component: PostmethodComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
