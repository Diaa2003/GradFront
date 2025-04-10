import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app/app.routes';

@Component({
  selector: 'app-sign-up',
  imports: [AppRoutingModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) {}

  password: string ='';
  repeatPassword: string = '';

    onSubmit() {
      if (this.password !== this.repeatPassword) {
        alert('Passwords do not match!');
        return;
      }
      // بعد التحقق من صحة الباسورد، يتم التوجيه لصفحة الهوم
      this.router.navigate(['/home']);
    }
    
}
