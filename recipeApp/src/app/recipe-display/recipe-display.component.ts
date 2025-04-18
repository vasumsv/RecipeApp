import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent {
  @Input() recipes: string[] = [];
}
