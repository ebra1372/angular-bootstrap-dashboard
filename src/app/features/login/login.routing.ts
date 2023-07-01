import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login.component";

const routes: Routes = [
  { path: "", component: LoginComponent, title: "ورود" },
];

export const LoginRoutes = RouterModule.forChild(routes);
