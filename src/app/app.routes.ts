import { Routes } from "@angular/router";

import { authGuard } from "./guards/auth.guard";
import { MapComponent } from "./map/map.component"; // Adjust the path as necessary

export const routes: Routes = [
    {
        path: "login", 
        loadComponent: () => import("./login-form/login-form.component").then(m => m.LoginFormComponent), // Lazy load the login component
    },
    {
        path: "BackgroundPaths",
        loadComponent: () => import("./background-elements/background-elements.component").then(m => m.BackgroundElementsComponent), // Lazy load the background paths component
    },
    {
        path: "main",
        component: MapComponent, // Aquí debes poner el componente que quieres mostrar
        canActivate: [authGuard],
    },
    {
        path: "", 
        redirectTo: "/login", 
        pathMatch: "full" 
    },
    {
        path: "**", 
        redirectTo: "main" 
    }
];