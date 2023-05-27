import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  foodDetails: any = {}

  constructor( activateRoute: ActivatedRoute, private API: ApiServiceService, private router: Router) {
    activateRoute.params.subscribe((param) => {
      
     API.api.get(API.GET_PRODUCT_BY_ID, {params: {id: param['id']}}).then(response => {
    
      this.foodDetails = response?.data
   
    })
    .catch(error => {
      console.log('edit error', error);
    });

    })
 }
}
