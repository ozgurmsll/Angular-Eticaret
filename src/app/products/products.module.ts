import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "ckeditor4-angular";
import { CategoriesModule } from "../categories/categories.module";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
  declarations:[
    ProductListComponent,
    ProductComponent,
    ProductCreateComponent,

  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    CKEditorModule,
    CategoriesModule,
  ],
  exports:[    ProductListComponent,
    ProductComponent,
    ProductCreateComponent,],
})

export class ProductsModule{

}
