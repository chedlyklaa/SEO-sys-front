import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './userlisting/userlisting.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RoleGuard } from './guard/role.guard'; 

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
  {component:ForgetPasswordComponent,path:'forgetpassword'},
  {component:HomeComponent,path:'',canActivate:[AuthGuard]},
  //role guard don't work should fix it 
 {component:UserComponent,path:'userlisting',canActivate:[AuthGuard , RoleGuard], data: {role: ['admin']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
