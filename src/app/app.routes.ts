import type { Routes } from "@angular/router";
import { BackgroundPathsComponent } from "./background-paths/background-paths.component";
import { authGuard } from "./guards/auth.guard";
import { MapComponent } from "./map/map.component"; // Adjust the path as necessary

export const routes: Routes = [
    {
        path: "login", 
        component: BackgroundPathsComponent 
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