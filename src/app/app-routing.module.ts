import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { NewDogComponent } from './components/pages/forms/new-dog/new-dog.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AllPetsComponent } from './components/pages/pets/all-pets/all-pets.component';
import { CatsComponent } from './components/pages/pets/cats/cats.component';
import { DogsComponent } from './components/pages/pets/dogs/dogs.component';
import { FishComponent } from './components/pages/pets/fish/fish.component';

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
        path: 'all-pets',
        component: AllPetsComponent,
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
        path: 'new-dog',
        component: NewDogComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
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
