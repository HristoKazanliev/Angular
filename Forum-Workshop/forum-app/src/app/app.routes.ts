import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found';
import { HomeComponent } from './home/home';
import { MainComponent } from './theme/main/main';
import { RegisterComponent } from './auth/register/register';
import { LoginComponent } from './auth/login/login';
import { ProfileComponent } from './auth/profile/profile';
import { CreateThemeComponent } from './theme/create-theme/create-theme';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        //Requires the entire URL to match exactly, with no trailing segments.
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'themes', component: MainComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: ProfileComponent}, 
    { path: 'create-theme', 
      component: CreateThemeComponent, 
      canActivate: [authGuard] 
      },
    { path: '**', component: NotFoundComponent },

];
