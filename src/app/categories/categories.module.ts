import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthenticationModule } from "../authentication/authentication.module";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryListComponent } from "./category-list/category-list.component";



@NgModule({
  declarations:[
    CategoryListComponent,
    CategoryCreateComponent,

  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    AuthenticationModule,
  ],
  exports:[
    CategoryListComponent,
    CategoryCreateComponent,
   ],
})

export class CategoriesModule{

}
