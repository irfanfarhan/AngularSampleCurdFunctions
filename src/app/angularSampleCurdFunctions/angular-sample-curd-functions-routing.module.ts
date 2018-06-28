import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const angularSampleCurdFunctionsRoutes: Routes = [
  {
    path: 'dashboard',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(angularSampleCurdFunctionsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AngularSampleCurdFunctionsRoutingModule { }
