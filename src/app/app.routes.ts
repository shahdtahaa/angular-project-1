import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'home', 
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'PortFolio',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
   path:'**', 
   component: NotFoundComponent,
   title:'Page not found'
  }
];
