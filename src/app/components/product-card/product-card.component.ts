import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() food: any;

  user: any = {};

  constructor( private router: Router, private AuthServices: AuthService) { 
      
  }

  ngOnInit(): void {
    this.AuthServices.getUserHandler()
    this.AuthServices.getUser().subscribe((data) => {
     this.user = {...data}
   })
    
   }
  detailsViewHandler(id: string){
    this.router.navigateByUrl('/details-view/' + id)
  }

  unAuthorised(){
    this.router.navigateByUrl("/login")
  }
}
