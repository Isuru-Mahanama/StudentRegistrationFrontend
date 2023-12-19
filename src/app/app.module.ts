import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PersonalDetailsFormComponent } from './Forms/personal-details-form/personal-details-form.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LoginFormComponent } from './Forms/login-form/login-form.component';
import { AdminSignUpComponent } from './Forms/admin-sign-up/admin-sign-up.component';
import { LangingPageComponent } from './Forms/landing-page/langing-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GettingStuEmailComponent } from './Forms/getting-stu-email/getting-stu-email.component';
import { CourseRegistrationComponent } from './Forms/Course-registration/course-registration.component';
import { ScedulingComponent } from './Forms/sceduling/sceduling.component';
import { UserDashboardComponent } from './core/components/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './core/components/user-navbar/user-navbar.component';
import { MyProfileComponent } from './Forms/my-profile/my-profile.component';
import { AllStudentsComponent } from './Forms/all-students/all-students.component';
import { AllSchedulesComponent } from './Forms/all-schedules/all-schedules.component';
import { AllCoursesComponent } from './Forms/all-courses/all-courses.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalDetailsFormComponent,
    DashboardComponent,
    LoginFormComponent,
    AdminSignUpComponent,
    LangingPageComponent,
    GettingStuEmailComponent,
    CourseRegistrationComponent,
    ScedulingComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    MyProfileComponent,
    AllStudentsComponent,
    AllSchedulesComponent,
    AllCoursesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
