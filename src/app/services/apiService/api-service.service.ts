import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  URL = 'https://food-mart-backend.vercel.app' 
  api = axios.create();

  constructor() { 

  }

  axiosRequests() {
    this.api.interceptors.request.use(
      async (config: any) => {
        let token = localStorage.getItem("token");
        if (token) {
          config.headers["x-access-token"] = token;
        }
    
        return config;
      },
      (error: any) => {
        Promise.reject(error);
      }
    );
  }

  SIGN_UP: any =  `${this.URL}/user/user-signup`
  SIGN_IN: any =  `${this.URL}/user/user-signin`
  GET_USER: any =  `${this.URL}/user/getUser`
  ADD_PRODUCT: any =  `${this.URL}/product/add-product`
  GET_PRODUCT: any =  `${this.URL}/product/get-product`
  GET_PRODUCT_BY_ID: any =  `${this.URL}/product/get-product-by-id`
  DELETE_PRODUCT: any =  `${this.URL}/product/delete-product`
  UPDATE_PRODUCT: any =  `${this.URL}/product/update-product`
}
