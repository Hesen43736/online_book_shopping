import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { API_URL } from 'src/app/constants';
import { MatDialog } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from 'src/app/service/product.service';
import { BasketService } from 'src/app/service/basket.service';
import { BasketProduct } from 'src/app/model/basket';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {
  @Input('product') product: Product;
  constructor(private matDialog: MatDialog, private productService: ProductService, private basketService: BasketService) { }

  ngOnInit() {
    this.downloadPath = API_URL + '/filedownload/files/';
  }
  downloadPath: string;

  productSelected() {
    this.productService.selectedProductId = this.product.id;
    this.matDialog.open(ProductDetailComponent);
  }

  toBasket() {
     

    let thisProductAlreadyInBasket: boolean = false;
    let basketProducts = this.basketService.basketProducts;

    for (let index = 0; index < basketProducts.length; index++) {
      const basketProduct = basketProducts[index];
      if (basketProduct.product.id === this.product.id) {
        thisProductAlreadyInBasket = true; 
        basketProduct.count++;
        break;
      }
    }
    if (thisProductAlreadyInBasket) {
// increment count
    } else {
      let basketProduct: BasketProduct = new BasketProduct(0);
      basketProduct.product = this.product;

      basketProducts.push(basketProduct);
    }
    console.log(basketProducts);
    let basketCount=0;
    for (let index = 0; index < basketProducts.length; index++) {
      const bp = basketProducts[index];
      basketCount+=bp.count;
      
    }

this.basketService.productCountChanged.emit(basketCount);



  }

}
