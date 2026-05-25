import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found';
import { HomeComponent } from './home/home';
import { MainComponent } from './theme/main/main';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        //Requires the entire URL to match exactly, with no trailing segments.
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'themes', component: MainComponent }, 
    { path: '**', component: NotFoundComponent }
];
