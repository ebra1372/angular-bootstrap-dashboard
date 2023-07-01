import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, title: "داشبورد" },
];

export const DashboardRoutes = RouterModule.forChild(routes);
