import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";






@NgModule({

  declarations:[
    AuthComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
  
  ],
  exports:[   ],
})

export class AuthenticationModule{

}
