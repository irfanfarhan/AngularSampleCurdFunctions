import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { LoadingService } from '../shared/services/loading.service';
import { AngularSampleCurdFunctionsRoutingModule } from './angular-sample-curd-functions-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from '../angularSampleCurdFunctions/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibraryModule,
    AngularSampleCurdFunctionsRoutingModule
  ],
  declarations: [
    NavigationComponent,
    DashboardComponent,
  ],
  entryComponents: [],
  providers: [LoadingService, UserService]
})
export class AngularSampleCurdFunctionsModule {}
