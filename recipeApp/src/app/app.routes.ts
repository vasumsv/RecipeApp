import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Import the root component
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component'; // Import IngredientSearchComponent

export const appRoutes: Routes = [
  {
    path: '', // Root path
    component: AppComponent, // Root component
  },
  {
    path: 'ingredients', // Path for ingredient search
    component: IngredientSearchComponent,
  },
  {
    path: '**', // Wildcard route for a 404 page
    redirectTo: '',
  }
];
