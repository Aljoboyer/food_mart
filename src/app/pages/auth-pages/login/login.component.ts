import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userObj: any = {}
  emailRegex: any = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errorObj: any = {
    emailErr: '',
    passwordErr: ''
  }
  constructor(private AuthHandler: AuthService) { }

  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
  }

  onUserChangeHandler(e: any){
    const dataname = e.target.name;
    const datavalue = e.target.value;

    if(dataname == "email"){
      this.errorObj = {
        ...this.errorObj, emailErr: ''
      }
    }
    if(dataname == "password"){
      this.errorObj = {
        ...this.errorObj, passwordErr: ''
      }
    }

    const newdata = {...this.userObj}
    newdata[dataname] = datavalue;

    this.userObj = newdata
  }

  signInHandler(){
    if(!this.userObj.email || !this.emailRegex.test(this.userObj.email)){
      this.errorObj = {
        ...this.errorObj, emailErr: 'Please write proper email'
      }
    }
    if(!this.userObj.password || this.userObj.password.length <= 5){
      this.errorObj = {
        ...this.errorObj, passwordErr: 'Please enter password with 6 character'
      }
    }
    if(!this.userObj.email || !this.userObj.password || this.userObj.password.length <= 5){
      return
    }
    this.AuthHandler.LoginHandler(this.userObj)
    console.log('User Obj >>', this.userObj)
  }

}
