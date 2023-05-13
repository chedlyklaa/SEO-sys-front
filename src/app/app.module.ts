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
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { HighchartsChartModule } from 'highcharts-angular';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";
import { BacklinksComponent } from './backlinks/backlinks.component';
import { ManageRobotsComponent } from './manage-robots/manage-robots.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig  =
{
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 100,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ffd01a",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(255,255,255, 0.8)",
  "pbColor": "#ffffff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

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
    BacklinksComponent,
    ManageRobotsComponent,
  
    
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
    PaginationModule.forRoot(),
    ListBoxModule,
    ChartModule,
    HighchartsChartModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

    
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
