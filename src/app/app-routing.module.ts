import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsFormComponent } from './Forms/personal-details-form/personal-details-form.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LoginFormComponent } from './Forms/login-form/login-form.component';
import { AdminSignUpComponent } from './Forms/admin-sign-up/admin-sign-up.component';
import { LangingPageComponent } from './Forms/landing-page/langing-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { GettingStuEmailComponent } from './Forms/getting-stu-email/getting-stu-email.component';
import { CourseRegistrationComponent } from './Forms/Course-registration/course-registration.component';
import { ScedulingComponent } from './Forms/sceduling/sceduling.component';
import { UserDashboardComponent } from './core/components/user-dashboard/user-dashboard.component';
import { MyProfileComponent } from './Forms/my-profile/my-profile.component';
import { AllSchedulesComponent } from './Forms/all-schedules/all-schedules.component';
import { AllStudentsComponent } from './Forms/all-students/all-students.component';
import { AllCoursesComponent } from './Forms/all-courses/all-courses.component';


const routes: Routes = [

 
  {
    path:'login',
    component:LoginFormComponent
  },

  {
    path:'admin/courseRegistration',
    component : CourseRegistrationComponent
  },
  {
    path:'',
    redirectTo :'login',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'admin/personalDetails',
    component : PersonalDetailsFormComponent
  },
  {
    path:'admin/gettingstudentdetails',
    component : GettingStuEmailComponent
  },
 
  {
    path:'admin/scheduling',
    component: ScedulingComponent
  },
  {
    path:'userDashboard',
    component: UserDashboardComponent
  },
  {
    path:'myProfile',
    component: MyProfileComponent
  },
  {
    path:'viewAllSchedule',
    component: AllSchedulesComponent
  },
  {
    path:'viewAllStudents',
    component: AllStudentsComponent
  },
  {
    path:'viewAllCourses',
    component: AllCoursesComponent
  },
  {
      path:'**',
      component:LangingPageComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
