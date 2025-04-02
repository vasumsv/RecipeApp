import { Component } from '@angular/core';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';

@Component({
  standalone: true, // Mark AppComponent as standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [IngredientSearchComponent], // Import the IngredientSearchComponent
})
export class AppComponent {
  onIngredientsSelected(selectedIngredients: string[]) {
    console.log('Selected Ingredients from AppComponent:', selectedIngredients);
  }
}
