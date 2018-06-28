import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddMultipleUsersComponent } from './components/add-multiple-users/add-multiple-users.component';

const ngNodejsMongoAppRoutes: Routes = [
  {
    path: 'dashboard',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'createuser',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: CreateUserComponent
      }
    ]
  },
  {
    path: 'edituser',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: EditUserComponent
      }
    ]
  },
  {
    path: 'addmultipleuser',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: AddMultipleUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ngNodejsMongoAppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NgNodejsMongoAppRoutingModule { }
