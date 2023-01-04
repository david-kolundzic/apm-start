import { Component, OnChanges, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  title ="Product list ";
  message!:string;
  imageWidth=50;
  imageMargin=4;
  showImage =false;
  
  private _listFilter: string = '';
  products: IProduct[]=[];
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredProducts =  this.performFilter(value);
  }
  
 

  filteredProducts: IProduct[]=[];

  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
  
  ngOnChanges():void{

  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter(
      (product: IProduct)=> product.productName.toLowerCase().includes(filterBy.toLowerCase()))
  }

  ratingClicked(message:string):void{
    console.log(message);
    this.message = message;
  }
}
