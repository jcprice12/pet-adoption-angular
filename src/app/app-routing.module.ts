import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { FishComponent } from './fish/fish.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'dogs',
        component: DogsComponent
      }, {
        path: 'cats',
        component: CatsComponent
      }, {
        path: 'fish',
        component: FishComponent
      }, {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'not-found',
        component: NotFoundComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/not-found'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
