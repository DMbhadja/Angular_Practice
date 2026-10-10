import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { About } from './about/about/about.component';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'about', component: About },
];
