import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements DoCheck , OnInit{

  userObj: any = {}
  emailRegex: any = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errorObj: any = {
    emailErr: '',
    passwordErr: '',
    password2Err: '',
    nameErr: ''
  }

  constructor(private AuthHandler: AuthService) { }

  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
  }

  onUserChangeHandler(e: any){
    
    const dataname = e.target.name;
    const datavalue = e.target.value;

    if(dataname == "name"){
      this.errorObj = {
        ...this.errorObj, nameErr: ''
      }
    }
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
    if(dataname == "password2"){
      this.errorObj = {
        ...this.errorObj, password2Err: ''
      }
    }
    const newdata = {...this.userObj}
    newdata[dataname] = datavalue;

    this.userObj = newdata
  }

  signUpHandler(){
    if(!this.userObj.name ){
      this.errorObj = {
        ...this.errorObj, nameErr: 'Please write proper email'
      }
    }

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
    if(this.userObj.password !== this.userObj.password2){
      this.errorObj = {
        ...this.errorObj, password2Err: 'Password should be match'
      }
    }
    if(!this.userObj.email || !this.userObj.password || this.userObj.password.length <= 5 || (this.userObj.password !== this.userObj.password2)){
      return
    }

    this.AuthHandler.RegisterHandler(this.userObj.email, this.userObj.password, this.userObj.name)
    console.log('User Obj >>', this.userObj)
  }
}
