import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'pm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  errorMessage!:string;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.errorMessage=this.productService.readError()
  }


}
