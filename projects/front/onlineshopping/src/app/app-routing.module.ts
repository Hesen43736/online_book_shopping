import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { OrderConfirmPageComponent } from './component/order-confirm-page/order-confirm-page.component';
import { OrderListComponent } from './component/order-list/order-list.component';


const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'',component:CustomerPageComponent},
{path:'products',component:ProductListComponent,canActivate:[RouteGuardService]},
{path:'home',component:HomeComponent},
{path:'main-page',component:MainPageComponent},
{path:'logout',component:LogoutComponent},
{path:'customer-page',component:CustomerPageComponent},
{path:'admin-page',component:AdminPageComponent,canActivate:[RouteGuardService]},
{path:'category-list',component:CategoryListComponent},
{path:'order-confirm',component:OrderConfirmPageComponent},
{path:'order-list',component:OrderListComponent},
{path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
