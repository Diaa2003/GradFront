import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { HomeComponent } from '../home/home.component';
import { DynamicImgComponent } from '../sign-in/dynamic-img/dynamic-img.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
// مسار المكون
// export const routes: Routes = [
//   { path: 'sign-up', component: SignUpComponent },
//   { path: 'sign-in', component: SignInComponent },
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' } // التوجيه لصفحة الهوم عند فتح الموقع
// ];
@NgModule({
  declarations: [
     // إضافة المكونات هنا
  ],
  imports: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    DynamicImgComponent,
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
