import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BackgroundPathsComponent } from './background-paths/background-paths.component';
import { authGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
