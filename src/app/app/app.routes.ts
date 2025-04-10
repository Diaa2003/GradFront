
import { RouterModule, Routes } from '@angular/router';


import { SignUpComponent } from '../sign-up/sign-up.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'app-sign-up', component: SignUpComponent },
    { path: 'app-sign-in', component: SignInComponent },
    { path: 'app-home', component: HomeComponent },
    { path: '', redirectTo: '/app-home', pathMatch: 'full' } // التوجيه لصفحة الهوم عند فتح الموقع
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
