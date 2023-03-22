import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.css"],
  providers: [CategoryService],
})
export class CategoryCreateComponent implements OnInit {
  toastr: any;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {}

  saveCategory(name: any) {
    const categorys={
      id: 0, name: name.value
    }
    this.toastrService.success("Kategori Eklendi","Başarılı")

    this.categoryService
      .createCategory(categorys)

      .subscribe((_data) => {
        this.router.navigate(["/products"]);
      });
  }
}
