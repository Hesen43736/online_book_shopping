import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicInterceptorService } from './service/basic-interceptor.service';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { ProductTemplateComponent } from './component/product-template/product-template.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { BasketComponent } from './component/basket/basket.component';
import { OrderConfirmPageComponent } from './component/order-confirm-page/order-confirm-page.component';
import { DataTablesModule } from 'angular-datatables';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OrderListComponent } from './component/order-list/order-list.component';
import { FakeComponent } from './fake/fake.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ProductListComponent,
    MenuComponent,
    CustomerPageComponent,
    MainPageComponent,
    AdminPageComponent,
    CategoryListComponent,
    AddProductComponent,
    ProductTemplateComponent,
    ProductDetailComponent,
    BasketComponent,
    OrderConfirmPageComponent,
    OrderListComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatDialogModule, 
    MatProgressSpinnerModule, 
    MatButtonModule,DataTablesModule,
    InfiniteScrollModule
    

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:BasicInterceptorService,multi:true
      
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent,ProductDetailComponent,BasketComponent]
})
export class AppModule { }

