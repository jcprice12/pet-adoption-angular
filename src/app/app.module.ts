import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDogFormComponent } from './components/forms/new-dog-form/new-dog-form.component';
import { IconLinkComponent } from './components/icon-link/icon-link.component';
import { FormPageComponent } from './components/pages/forms/form-page/form-page.component';
import { NewDogComponent } from './components/pages/forms/new-dog/new-dog.component';
import { HeaderComponent } from './components/banners/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AllPetsComponent } from './components/pages/pets/all-pets/all-pets.component';
import { CatsComponent } from './components/pages/pets/cats/cats.component';
import { DogsComponent } from './components/pages/pets/dogs/dogs.component';
import { FishComponent } from './components/pages/pets/fish/fish.component';
import { PetsPageHeaderComponent } from './components/banners/pets-page-header/pets-page-header.component';
import { PetsPageComponent } from './components/pages/pets/pets-page/pets-page.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetsGridComponent } from './components/pets-grid/pets-grid.component';
import { FormDirective } from './directives/form/form.directive';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DynamicFormComponent } from './components/forms/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FishComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    PetsGridComponent,
    PetCardComponent,
    PetsPageHeaderComponent,
    PetsPageComponent,
    FormPageComponent,
    FormDirective,
    AllPetsComponent,
    NewDogComponent,
    NewDogFormComponent,
    IconLinkComponent,
    DynamicFormComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
