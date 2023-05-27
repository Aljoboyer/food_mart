import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  
  constructor( private router: Router, private AuthServices: AuthService) { 
      
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
