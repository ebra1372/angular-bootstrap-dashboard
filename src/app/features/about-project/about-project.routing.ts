import { Routes, RouterModule } from '@angular/router';
import { AboutProjectComponent } from "./about-project.component";

const routes: Routes = [
  { path: "", component: AboutProjectComponent, title: "درباره پروژه" },
];

export const AboutProjectRoutes = RouterModule.forChild(routes);
