import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes'; // Import your routes configuration

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes), // Use the routes defined in app.routes.ts
    provideHttpClient(), // Provide HTTP client service globally
  ],
};
