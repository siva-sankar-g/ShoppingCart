import { Component, Input } from '@angular/core';
import { CategoryService } from '../../../shared/service/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  categories$;
 @Input('activatedCategory') activatedCategory: string;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.Categories;
   }

  

}
