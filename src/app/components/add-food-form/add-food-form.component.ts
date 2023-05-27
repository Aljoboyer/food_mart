import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/apiService/api-service.service';
import Swal from 'sweetalert2';

export interface foodInterface{
  foodName: string,
  foodPrice: number,
  foodDescription: string,
  foodImg: any
}

@Component({
  selector: 'app-add-food-form',
  templateUrl: './add-food-form.component.html',
  styleUrls: ['./add-food-form.component.scss']
})

export class AddFoodFormComponent implements OnInit{

  foodDetails: any = {};
  foodId: string = ''
  foodObj: foodInterface | any= {
    foodName: '',
    foodPrice: 0,
    foodDescription: '',
    foodImg: {}
  }

  errorObj: any = {
    foodNameErr: '',
    priceErr: '',
    desceErr: ''
  }
  constructor(private API: ApiServiceService,  activateRoute: ActivatedRoute,private router: Router) {
    activateRoute.params.subscribe((param) => {
      console.log('Paramss', param)
        if(param["id"]){
          API.api.get(API.GET_PRODUCT_BY_ID, {params: {id: param['id']}}).then(response => {
            console.log('getUser by id Response', response);
            this.foodId = param["id"]
            this.foodObj.foodName = response?.data?.foodName
            this.foodObj.foodPrice = response?.data?.foodPrice
            this.foodObj.foodDescription = response?.data?.foodDescription
            this.foodObj.foodImg = response.data.foodImg
         
          })
          .catch(error => {
            console.log('Register error', error);
          });
        }
        else{
          console.log('Id Not Found')
        }
     })
   }

  ngOnInit(): void {

  }

  foodDataChangeHandler(e: any){
    const dataname = e.target.name;
    const datavalue = e.target.value;

    let newdata: any = {}
    if(dataname == "foodName"){
      this.errorObj = {
        ...this.errorObj, foodNameErr: ''
      }
    }
    if(dataname == "foodPrice"){
      this.errorObj = {
        ...this.errorObj, priceErr: ''
      }
    }
    if(dataname == "foodDescription"){
      this.errorObj = {
        ...this.errorObj, desceErr: ''
      }
    }
    if(dataname == "foodImg"){
      const val1 = e.target.files[0]
      newdata = {...this.foodObj}
      newdata[dataname] = val1;
    }
    else{
       newdata = {...this.foodObj}
      newdata[dataname] = datavalue;
    }


    this.foodObj = newdata
  }

  foodAddHandler(){
    if(!this.foodObj.foodName){
      this.errorObj = {
        ...this.errorObj, foodNameErr: 'Please write food name'
      }
    }
    if(!this.foodObj.foodPrice || this.foodObj.foodPrice == 0){
      this.errorObj = {
        ...this.errorObj, priceErr: 'Please write food price'
      }
    }
    if(!this.foodObj.foodDescription){
      this.errorObj = {
        ...this.errorObj, desceErr: 'Please write food description'
      }
    }
    if(!this.foodObj.foodName || !this.foodObj.foodPrice || !this.foodObj.foodDescription){
      return
    }
    console.log('this.foodObj', this.foodObj)
    const fd = new FormData()

    fd.append('foodName', this.foodObj.foodName)
    fd.append('foodPrice', this.foodObj.foodPrice)
    fd.append('foodDescription', this.foodObj.foodDescription)
    fd.append('foodImg', this.foodObj.foodImg, this.foodObj.foodImg.name);

     this.API.api.post(this.API.ADD_PRODUCT, fd).then(response => {
      console.log('add product Response', response);
      Swal.fire('Success...', 'Product Added succesfully!', 'success')
      setTimeout(() => {
        this.router.navigateByUrl("/")
      }, 1000)
    })
    .catch(error => {
      console.log('add product error', error);
    });

  }

  updateFoodHandler(){

    if(!this.foodObj.foodName){
      this.errorObj = {
        ...this.errorObj, foodNameErr: 'Please write food name'
      }
    }
    if(!this.foodObj.foodPrice || this.foodObj.foodPrice == 0){
      this.errorObj = {
        ...this.errorObj, priceErr: 'Please write food price'
      }
    }
    if(!this.foodObj.foodDescription){
      this.errorObj = {
        ...this.errorObj, desceErr: 'Please write food description'
      }
    }
    if(!this.foodObj.foodName || !this.foodObj.foodPrice || !this.foodObj.foodDescription){
      return
    }
    
    if(this.foodObj?.foodImg?.name){
      console.log('enter here if', this.foodObj)
      const fd = new FormData()

      fd.append('foodName', this.foodObj.foodName)
      fd.append('foodPrice', this.foodObj.foodPrice)
      fd.append('foodDescription', this.foodObj.foodDescription)
      fd.append('foodImg', this.foodObj.foodImg, this.foodObj.foodImg.name)
      fd.append('_id' , this.foodId)
  
       this.API.api.put(this.API.UPDATE_PRODUCT, fd).then(response => {
        console.log('UPDATE product Response', response);
        Swal.fire('Success...', 'Product Updated succesfully!', 'success')
        setTimeout(() => {
          this.router.navigateByUrl("/")
        }, 1000)
      })
      .catch(error => {
        console.log('UPDATE product error', error);
      });
    }else{
      console.log('enter here else', this.foodObj)
      this.API.api.put(this.API.UPDATE_PRODUCT, {...this.foodObj, _id: this.foodId}).then(response => {
        console.log('UPDATE product Response', response);

        Swal.fire('Success...', 'Product Updated succesfully!', 'success')
        setTimeout(() => {
          this.router.navigateByUrl("/")
        }, 1000)

      }).catch(error => {
        console.log('UPDATE product error', error);
      });
    }
  }
}
 