import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        //Requires the entire URL to match exactly, with no trailing segments.
        pathMatch: 'full'
    },
    { path: 'home', loadComponent: () => import('./home/home').then(c => c.HomeComponent) },
    { path: 'themes', loadComponent: () => import('./theme/main/main').then(c => c.MainComponent) },
    { path: 'register', loadComponent: () => import('./auth/register/register').then(c => c.RegisterComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login').then(c => c.LoginComponent)},
    { path: 'profile', loadComponent: () => import('./auth/profile/profile').then(c => c.ProfileComponent)}, 
    { path: 'create-theme', 
      loadComponent: () => import('./theme/create-theme/create-theme').then(c => c.CreateThemeComponent), 
      canActivate: [authGuard] 
    },
    { path: 'themes/:id', loadComponent: () => import('./theme/theme-comment/theme-comment').then(c => c.ThemeCommentComponent)},
    { path: '**', loadComponent: () => import('./not-found/not-found').then(c => c.NotFoundComponent) },

];
