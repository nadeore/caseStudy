import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './addContact/registration.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'addContact',
    component: RegistrationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
