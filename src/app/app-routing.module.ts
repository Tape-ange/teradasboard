import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './pages/auth/auth.module';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {
    path : '' , component : BaseLayoutComponent, loadChildren :  () => import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  }

];

@NgModule({
  imports: [LayoutModule, AuthModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
