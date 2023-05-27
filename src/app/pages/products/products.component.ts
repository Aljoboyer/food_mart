import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { foodInterface } from 'src/app/components/add-food-form/add-food-form.component';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  foods: foodInterface[] = []
  constructor(private router: Router, private API: ApiServiceService) { }

  ngOnInit(): void {
    this.API.api.get(this.API.GET_PRODUCT).then(response => {
      console.log('GET_PRODUCT Response', response);
      this.foods = response?.data
    })
    .catch(error => {
      console.log('GET_PRODUCT error', error);
    });
  }

}
