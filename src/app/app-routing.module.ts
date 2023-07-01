import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'services/auth-guard.service';
import { AdminLayoutComponent } from 'components/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import('features/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: "products",
        loadChildren: () => import('features/products/products.module').then(m => m.ProductsModule),
      },
      {
        path: "about-project",
        loadChildren: () => import('features/about-project/about-project.module').then(m => m.AboutProjectModule),
      },
    ]
  },
  {
    path: "login",
    loadChildren: () => import('features/login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    loadChildren: () => import('features/not-found/not-found.module').then(m => m.NotFoundModule),
    title: "404"
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }