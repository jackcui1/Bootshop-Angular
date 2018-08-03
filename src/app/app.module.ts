import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent,
    FooterComponent,
    CatagoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
