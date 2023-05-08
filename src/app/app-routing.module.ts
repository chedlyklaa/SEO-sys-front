import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RoleGuard } from './guard/role.guard'; 
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserListComponent } from './user-list/user-list.component';
import { ThemesService } from './service/themes.service';
import { KeywordThemeComponent } from './keyword-theme/keyword-theme.component';
import { PagesComponent } from './pages/pages.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  // without authGuard:
  {component:LoginComponent, path:'login'},
  {component:ForgetPasswordComponent, path:'forget-password'},
  {component: ChangePasswordComponent, path: 'change-password/:token'},
  //with authGuard:
  {component:RegisterComponent, path:'register',  canActivate: [AuthGuard] },
  {component:HomeComponent, path:'', canActivate: [AuthGuard]},
  {component:UserListComponent, path:'users', canActivate: [AuthGuard]},
  {component:KeywordThemeComponent, path:'keywords', canActivate: [AuthGuard]},
  {component:PagesComponent, path:'pages', canActivate: [AuthGuard]},
  {component:AddPageComponent, path:'add-page', canActivate: [AuthGuard]},
  {component: DashboardComponent, path:'dashboard', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
