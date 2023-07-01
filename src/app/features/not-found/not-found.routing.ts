import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { path: "", component: NotFoundComponent, title: "404" },
];

export const NotFoundRoutes = RouterModule.forChild(routes);
