//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/sigup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'forgetPassword',
    loadChildren: () => import('./auth/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  },
  {
    path: 'newPassword',
    loadChildren: () => import('./auth/new-password/new-password.module').then(m => m.NewPasswordModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'branch',
    loadChildren: () => import('./page/branches/branches.module').then(m => m.BranchesModule)
  },
  {
    path: 'chooseDate',
    loadChildren: () => import('./page/choose-date/choose-date.module').then(m => m.ChooseDateModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./page/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }