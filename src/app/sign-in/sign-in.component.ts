import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { DynamicImgComponent } from "./dynamic-img/dynamic-img.component";
import { AppRoutingModule } from '../app/app.routes';

@Component({
  selector: 'app-sign-in',
  imports: [DynamicImgComponent,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private router: Router) {}

  onSubmit() {
    debugger
    // بعد ما يدخل المستخدم بياناته بنجاح، يتم توجيهه إلى صفحة الهوم
    this.router.navigate(['/app-home']);
  }
}
