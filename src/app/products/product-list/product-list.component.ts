import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentication/auth.service';
import { Product } from '../product.model';
import { ProductService } from '../product.services';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  private url = 'https://ng-app-da997-default-rtdb.firebaseio.com/products/';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
    private toastrService:ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // veri tabanında veriyi cekiyoruz
    this.route.params.subscribe((params) => {
      this.loading = true;
      this.productService.getProduct(params['categoryId']).subscribe((data) => {
        this.products = data;
        this.loading = false;
      });
    });
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      this.isAdmin = user?.email == 'ozgurmuslu58@gmail.com';
    });
  }
  deleteProduct(id: string) {
    this.authService.user.subscribe((user) =>this.http.delete(this.url + id + '.json?auth='+user?.token).subscribe((data)=>this.router.navigate(['/products'])))
    
    this.toastrService.success("Ürün başarılı şekilde Silindi","Başarılı")

}}
