import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: ()=> import('./pages/login/login.component').then(a => a.LoginComponent)},
    { path: 'signup', loadComponent: ()=> import('./pages/signup/signup.component').then(a => a.SignupComponent)},
];
