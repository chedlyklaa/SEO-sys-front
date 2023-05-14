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
import { BacklinksComponent } from './backlinks/backlinks.component';
import { ManageRobotsComponent } from './manage-robots/manage-robots.component';
import { ManageSitemapComponent } from './manage-sitemap/manage-sitemap.component';
import { UnauthPageComponent } from './unauth-page/unauth-page.component';

const routes: Routes = [
  // without authGuard:
  {component:LoginComponent, path:'login'},
  {component:ForgetPasswordComponent, path:'forget-password'},
  {component: ChangePasswordComponent, path: 'change-password/:token'},
  //with authGuard:
  {component:RegisterComponent, path:'register',  canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin"]} },
  {component:HomeComponent, path:'', canActivate: [AuthGuard]},
  {component:UserListComponent, path:'users', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin"]}},
  {component:KeywordThemeComponent, path:'keywords', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "seo-specialist", "redactor"]}},
  {component:PagesComponent, path:'pages', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "seo-specialist", "redactor"]}},
  {component:AddPageComponent, path:'add-page', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "seo-specialist", "redactor"]}},
  {component: DashboardComponent, path:'dashboard',canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "seo-specialist"]}},
  {component:BacklinksComponent, path:'backlinks', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "developer"]}},
  {component:ManageRobotsComponent, path:'manage-robots', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "developer"]}},
  {component:ManageSitemapComponent, path:'manage-sitemap', canActivate: [AuthGuard, RoleGuard], data : {roles : ["admin", "developer"]}},

  {component: UnauthPageComponent, path:'unauthorized', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
