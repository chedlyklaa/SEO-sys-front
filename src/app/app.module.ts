import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './user-update/user-update.component';
import { KeywordThemeComponent } from './keyword-theme/keyword-theme.component';
import { PagesComponent } from './pages/pages.component';
import { AddPageComponent } from './add-page/add-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppBarModule } from "@syncfusion/ej2-angular-navigations";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PageUpdateComponent } from './page-update/page-update.component';
import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    UserListComponent,
    UpdateUserComponent,
    NavbarComponent,
    KeywordThemeComponent,
    PagesComponent,
    AddPageComponent,
    DashboardComponent,
    PageUpdateComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    FormsModule,
    BrowserModule,
    DashboardLayoutModule,
    ChartModule,
    AccumulationChartModule,
    ProgressBarModule,
    SidebarModule,
    AppBarModule,
    PaginationModule.forRoot()
    
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
