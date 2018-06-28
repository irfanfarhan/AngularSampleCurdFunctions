import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { LoadingService } from '../shared/services/loading.service';
import { NgNodejsMongoAppRoutingModule } from './ng-nodejs-mongo-app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserService } from '../ngNodejsMongoApp/services/user.service';
import { AddMultipleUsersComponent } from './components/add-multiple-users/add-multiple-users.component';
import { XlsxToJsonService } from '../ngNodejsMongoApp/services/xlsx-to-json-service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibraryModule,
    NgNodejsMongoAppRoutingModule
  ],
  declarations: [
    NavigationComponent,
    DashboardComponent,
    CreateUserComponent,
    EditUserComponent,
    AddMultipleUsersComponent
  ],
  entryComponents: [],
  providers: [LoadingService, UserService, XlsxToJsonService]
})
export class NgNodejsMongoAppModule {}
