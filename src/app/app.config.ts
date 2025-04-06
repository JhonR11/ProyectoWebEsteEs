import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BackgroundElementsComponent } from './background-elements/background-elements.component';
import { authGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
  ]
};
