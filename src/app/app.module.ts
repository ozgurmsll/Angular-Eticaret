import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared-module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CategoriesModule } from './categories/categories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AppComponent, NotFoundComponent,  ],
  imports: [

    AppRoutingModule,
    HttpClientModule,

    ProductsModule,
    CategoriesModule,
    AuthenticationModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true,
      timeOut:2000,


    }),

  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
