import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PersonalDetailsFormComponent } from './Forms/personal-details-form/personal-details-form.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LoginFormComponent } from './Forms/login-form/login-form.component';
import { AdminSignUpComponent } from './Forms/admin-sign-up/admin-sign-up.component';
import { AdminLoginComponent } from './Forms/admin-login/admin-login.component';
import { LangingPageComponent } from './Forms/landing-page/langing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalDetailsFormComponent,
    DashboardComponent,
    LoginFormComponent,
    AdminSignUpComponent,
    AdminLoginComponent,
    LangingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
