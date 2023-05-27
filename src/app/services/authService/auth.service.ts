import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../apiService/api-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new Subject<any>();

  constructor(private router: Router, private API: ApiServiceService, private http: HttpClient) { }

  RegisterHandler(email: string, password: string, name: string){
    const  token = localStorage.getItem('token')
    
   this.API.api.post(this.API.SIGN_UP, {email, password, name}, {headers: {
    'Content-Type': 'application/json',
    'Authorization': `${token}`,
  }}).then(response => {
    console.log('Register Response', response);
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('profile', response.data.result)
    Swal.fire('Success...', 'Registered succesfully!', 'success')
    setTimeout(() => {
      this.router.navigateByUrl("/")
    }, 1000)
  })
  .catch(error => {
    console.log('Register error', error);
  });
  }

  LoginHandler(userObj: any){
    this.API.api.get(this.API.SIGN_IN, {params: userObj}).then(response => {
      console.log('lOGIN Response', response);
      if(response.data.token){
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('profile', response.data.result)
        this.router.navigateByUrl('/')
        this.subject.next({message: 'User Authorized'})
      }
 
    })
    .catch(error => {
      console.log('Register error', error);
      Swal.fire('Login Failed...', 'User Not Exists!', 'error')
    });
  }

  getUserHandler(){
   const  token = localStorage.getItem('token')

    this.API.api.get(this.API.GET_USER, {headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }}).then(response => {
      console.log('getUser Response', response);
      this.subject.next(response.data)
    })
    .catch(error => {
      console.log('Register error', error);
    });
  }

  getUser(): Observable<any>{
    return this.subject.asObservable()
  }

  logOut(){
    localStorage.clear()
    this.subject.next({})
    this.router.navigateByUrl('/')
  }
}
