import { Component } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { DynamicImgComponent } from "./sign-in/dynamic-img/dynamic-img.component";
@Component({
  selector: 'app-root',
  imports: [SignInComponent, DynamicImgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gradProject';
}
