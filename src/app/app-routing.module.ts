import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsFormComponent } from './Forms/personal-details-form/personal-details-form.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LoginFormComponent } from './Forms/login-form/login-form.component';

const routes: Routes = [
  {
    path :'admin/dashboard',
    component : DashboardComponent
  },
  {
    path:'admin/personalDetails',
    component : PersonalDetailsFormComponent
  },
  {
    path:'login',
    component:LoginFormComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
