import type { Routes } from "@angular/router"
import { BackgroundPathsComponent } from "./background-paths/background-paths.component"
import { authGuard } from "./guards/auth.guard"

export const routes: Routes = [
  { path: "login", component: BackgroundPathsComponent },
  {
    path: "main",
    canActivate: [authGuard],
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "main" },
]