import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/service/category.service';
import { ProductService } from '../../../shared/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

  category$;
  product = { };
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {

    this.category$ = this.categoryService.Categories
     this.id = this.route.snapshot.paramMap.get('id')
     this.productService.get(this.id)
     .pipe(take(1))
     .subscribe(product => this.product = product || {} )
   }

  save(product){
    if(this.id) this.productService.update(this.id,product);
    else this.productService.create(product);

    this.router.navigate(['/admin/adminproducts']);
  }

  delete() {
    if( !confirm('Are you sure, You want to delete the product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/adminproducts']);
  }
}
