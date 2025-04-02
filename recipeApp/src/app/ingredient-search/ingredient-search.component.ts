import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel support

@Component({
  standalone: true, // Mark the component as standalone
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.css'],
  imports: [FormsModule], // Include FormsModule for template-driven forms
})
export class IngredientSearchComponent {
  searchText: string = ''; // Bind search text
  ingredients = [
    { name: 'Egg', selected: false },
    { name: 'Chilli Powder', selected: false },
    { name: 'Salt', selected: false },
    { name: 'Tomato', selected: false },
    { name: 'Onion', selected: false },
  ];

  confirmSelection() {
    const selectedIngredients = this.ingredients
      .filter((i) => i.selected)
      .map((i) => i.name);
    console.log('Selected Ingredients:', selectedIngredients);
  }
}
