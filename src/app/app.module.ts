import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './components/pages/pets/cats/cats.component';
import { DogsComponent } from './components/pages/pets/dogs/dogs.component';
import { FishComponent } from './components/pages/pets/fish/fish.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/forms/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { RegisterComponent } from './components/pages/forms/register/register.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { PetsGridComponent } from './components/pets-grid/pets-grid.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetsPageHeaderComponent } from './components/pages/pets/pets-page-header/pets-page-header.component';
import { PetsPageComponent } from './components/pages/pets/pets-page/pets-page.component';
import { FormPageComponent } from './components/forms/form-page/form-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { FormDirective } from './directives/form.directive';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FishComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    PetsGridComponent,
    PetCardComponent,
    PetsPageHeaderComponent,
    PetsPageComponent,
    FormPageComponent,
    LoginFormComponent,
    FormDirective,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent, RegisterFormComponent],
})
export class AppModule {}
