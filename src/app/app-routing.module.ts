import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsFormComponent } from './Forms/personal-details-form/personal-details-form.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LoginFormComponent } from './Forms/login-form/login-form.component';
import { AdminSignUpComponent } from './Forms/admin-sign-up/admin-sign-up.component';
import { AdminLoginComponent } from './Forms/admin-login/admin-login.component';
import { LangingPageComponent } from './Forms/landing-page/langing-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

const routes: Routes = [

 
  {
    path:'login',
    component:LoginFormComponent
  },
  {
    path:'admin/signup',
    component:AdminSignUpComponent
  },
  {
    path:'admin/login',
    component:AdminLoginComponent
  },
 
  {
    path:'',
    redirectTo :'login',
    pathMatch: 'full'
  },
  {
    path:'',
    component: NavbarComponent,
    children:[
      {
          path :'admin/dashboard',
          component : DashboardComponent
        
      },
      {
          path:'landingPage',
          component:LangingPageComponent
        
      },
      {
        path:'admin/personalDetails',
        component : PersonalDetailsFormComponent
      }
    ]
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
