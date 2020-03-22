import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { FishComponent } from './components/fish/fish.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'dogs',
        component: DogsComponent,
      },
      {
        path: 'cats',
        component: CatsComponent,
      },
      {
        path: 'fish',
        component: FishComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/not-found',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
