import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: ()=> import('./pages/login/login.component').then(a => a.LoginComponent)},
    { path: 'signup', loadComponent: ()=> import('./pages/signup/signup.component').then(a => a.SignupComponent)},
    {
      path : '' ,loadComponent: ()=> import('./layouts/layout/layout.component').then(a => a.LayoutComponent),
      children : [ 
          { path: 'home', loadComponent: ()=> import('./pages/home/home.component').then(a => a.HomeComponent)},
      ]
    },

];
