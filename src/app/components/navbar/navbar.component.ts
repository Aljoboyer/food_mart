import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any = {}

  constructor(private AuthServices: AuthService) { }

  ngOnInit(): void {
   this.AuthServices.getUserHandler()
   this.AuthServices.getUser().subscribe((data) => {
    this.user = {...data}
    console.log('user data ', data )
  })
   
  }
  LogoutHandler(){
    this.AuthServices.logOut()
  }
} 
