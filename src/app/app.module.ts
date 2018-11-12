import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { CatagoryComponent } from './category/catagory.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryService} from './shared/service/category.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './shared/service/product-service';
import {ImageResizingDirective } from './shared/image-resizing.directive';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactService} from './shared/service/contact.service';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from './shared/service/alert.service';

const routeConfig: Routes = [
  {path: '', component: HomeComponent },
  {path: 'product/:productId', component: ProductDetailComponent},
  {path: 'products/:id', component: ProductListComponent},
  {path: 'contact', component: ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent,
    FooterComponent,
    CatagoryComponent,
    HomeComponent,
    ProductDetailComponent,
    ImageResizingDirective,
    ContactComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CategoryService,
    ProductService,
    ContactService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
