import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent {
  foodDetails: any = {}

  constructor( activateRoute: ActivatedRoute, private API: ApiServiceService, private router: Router) {
    activateRoute.params.subscribe((param) => {
      
     API.api.get(API.GET_PRODUCT_BY_ID, {params: {id: param['id']}}).then(response => {
      console.log('getUser by id Response', response);
      this.foodDetails = response?.data
    })
    .catch(error => {
      console.log('Register error', error);
    });

    })
 }


 deleteHandler(id: string){
  this.API.api.delete(this.API.DELETE_PRODUCT, {params: {id: id}}).then((response: { data: any; }) => {
    console.log('deleted by id Response', response);
    Swal.fire('Success...', 'Product Deleted succesfully!', 'success')
    setTimeout(() => {
      this.router.navigateByUrl("/")
    }, 1000)
  })
 }
 updateNavigateHandler(id: string){
  this.router.navigateByUrl('/edit-product/' + id)
 }
}
