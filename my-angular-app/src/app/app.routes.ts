import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Registration } from './registration/registration';
import { Singin } from './singin/singin';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default redirect
  { path: 'home', component: Home },
  { path: 'login', component: Singin },
  { path: 'registration', component: Registration },
];