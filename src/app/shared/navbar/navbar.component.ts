import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean=false;
  isAdmin:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit():void {
    this.authService.autoLogin();

    this.authService.user.subscribe((user) => {
      console.log(user);
      this.isAuthenticated = !!user;
      this.isAdmin = user?.email == 'x';
    });
  }

  logout(){
    this.authService.logout();
  }
}
