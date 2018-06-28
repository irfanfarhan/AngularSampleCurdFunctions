import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { LoaderComponent } from './components/loader/loader.component';
import { LibraryModule } from '../lib/lib.module';
import { RestService } from './services/rest.service';
import { ToastrModule } from 'ngx-toastr';
import { AppConfiguration } from './services/app-config.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LibraryModule,
    ToastrModule.forRoot(),
  ],
  declarations: [LoaderComponent,
    LoginComponent],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LoaderComponent,
    LoginComponent
  ],
  providers: [LoadingService, RestService, AppConfiguration]
})
export class SharedModule {}
