import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailGuard } from './products/product-detail.guard';
//sa ovim je fiksan error 
// type PathMatch = "full" | "prefix" | undefined;
// let paths =[
//   { path: 'products', component: ProductListComponent},
//   { path: 'products/:id', component: ProductListComponent},
//   { path: 'welcome', component: WelcomeComponent},
//   { path: '', redirectTo: 'welcome', pathMatch: 'full'},
//   { path: '**', component: PageNotFoundComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'products', component: ProductListComponent},
        { 
          path: 'product/:id', 
          canActivate: [ProductDetailGuard],
          component: ProductDetailComponent},
        { path: 'welcome', component: WelcomeComponent},
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', component: PageNotFoundComponent }
      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
