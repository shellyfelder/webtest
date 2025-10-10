// import { provideRouter } from '@angular/router';
// import { routes } from './app/app-routing.module'; 
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ changed from .module.ts

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // ✅ now router is active
});