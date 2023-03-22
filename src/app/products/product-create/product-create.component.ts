import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/categories/category.model';
import { CategoryService } from 'src/app/categories/category.service';
import { ProductService } from 'src/app/products/product.services';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [CategoryService],
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  error: string="";
  model:any={

  }
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  saveProduct(form:NgForm){
    if (this.model.categoryId=="")
    {
      this.error="categoryId  boş olamaz"
      this.toastrService.info("CategoryId  boş olamaz","Error")

      return;

    }
    const extensions=["jpeg","jpg","png"];
    const extension=this.model.image.split(".").pop();
    if (extensions.indexOf(extension)==-1) {
      this.error="Resim Uzantısı jpg-jpeg-png türünde olmalıdır"
      return;

    }

  const product = {
    id: 9,
    pName: this.model.pName,
    price: this.model.price,
    isActive: this.model.isActive,
    desc: this.model.desc,
    image: this.model.image,
    favPro: false,
    categoryId: this.model.categoryId,
  }
  if (form.valid) {
    this.productService.createProduct(product).subscribe((data) => {
      this.router.navigate(['/products']);
      this.toastrService.success("Ürün başarılı şekilde eklendi","Başarılı")

    });

  }else{
    this.error="Formu Kontrol ediniz"
  }

  }}










