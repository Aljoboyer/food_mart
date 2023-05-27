import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/auth-pages/login/login.component';
import { SignupComponent } from './pages/auth-pages/signup/signup.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';
import { DetailsViewComponent } from './pages/details-view/details-view.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  {path: '',  component: HomePageComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'sign-up',  component: SignupComponent},
  {path: 'addFood',  component: AddFoodComponent},
  {path: 'details-view/:id',  component: DetailsViewComponent},
  {path: 'edit-product/:id',  component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
