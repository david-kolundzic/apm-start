import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  title ="Product list ";
  message!:string;
  imageWidth=50;
  imageMargin=4;
  showImage =false;
  sub!: Subscription;
  
  private _listFilter: string = '';
  products: IProduct[]=[];
  errorMessage: any;

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
    this.sub= this.productService.getProducts().subscribe({
      next : (data: IProduct[])=>{
        console.log("Data received: ", data);
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log("On Destroy");
   
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
