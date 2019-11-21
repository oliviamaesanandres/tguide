import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: "", redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "", redirectTo: '/location',
    pathMatch: 'full'
  },
  {
    path: "", redirectTo: '/account',
    pathMatch: 'full'
  },
  {
    path: "", redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: "", redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
