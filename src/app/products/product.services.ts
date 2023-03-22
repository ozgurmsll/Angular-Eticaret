import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, delay, take, exhaustMap } from 'rxjs';
import { Product } from './product.model';
import { AuthService } from '../authentication/auth.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ProductService {
  private url = environment.dataBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}
  getProduct(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products.json').pipe(
      map((data) => {
        const products: Product[] = [];
        for (const key in data) {
          if (categoryId) {
            if (categoryId == data[key].categoryId) {
              products.push({ ...data[key], id: key });
            }
          } else {
            products.push({ ...data[key], id: key });
          }
        }

        return products;
      }),
      delay(1000)
    );
  }
  getProductbyId(id: string): Observable<Product> {
    return this.http
      .get<Product>(this.url + 'products/' + id + '.json')
      .pipe(delay(1000));
  }
  createProduct(product: Product): Observable<Product> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.post<Product>(
          this.url + 'products.json?auth=' + user?.token,
          product
        );
      })
    );
  }
}
