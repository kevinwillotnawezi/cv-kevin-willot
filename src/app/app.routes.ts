import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export enum ROUTES {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not-found'
}

export const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: Home,
    title: 'Home'
  },
  {
    path: ROUTES.ABOUT,
    component: About,
    title: 'About'
  },
  {
    path: ROUTES.NOT_FOUND,
    component: NotFound,
    title: 'Not found'
  },
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
  { path: '**', redirectTo: ROUTES.NOT_FOUND },
];
