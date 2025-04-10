import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AppRoutingModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router : Router){
   
  }
  ngOnInit(){
    this.router.navigate(['/app-sign-in'])
  }
   onSubmit() {
    
  }
  title = 'gradProject';
}
