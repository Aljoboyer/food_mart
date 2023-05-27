import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/auth-pages/login/login.component';
import { SignupComponent } from './pages/auth-pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { AddFoodFormComponent } from './components/add-food-form/add-food-form.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DetailsViewComponent } from './pages/details-view/details-view.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadersComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    AddFoodComponent,
    AddFoodFormComponent,
    ProductsComponent,
    ProductCardComponent,
    DetailsViewComponent,
    EditProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
