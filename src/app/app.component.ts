import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { ProductService } from './products/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  private title = 'Home Page';
  constructor(private authService:AuthService) {}
  ngOnInit(): void {
    this.authService.autoLogin();
  }


}
