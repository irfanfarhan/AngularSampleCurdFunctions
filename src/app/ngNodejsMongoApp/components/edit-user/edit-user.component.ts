import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { AddUser } from '../../model/add-user.model';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  id: any;
  userData: AddUser = new AddUser();
  updateUserForm: FormGroup;
  constructor(private userService: UserService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      queryParams => {
        this.id = queryParams['id'];
      });
    this.updateUserForm = this._fb.group({
      username: [''],
      firstName: [''],
      email: ['', Validators.required],
      lastName: [''],
      password: [''],
      confirmPassword: [''],
      role: ['']
    });
    this.getUserById();
  }

  getUserById() {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.getUserById(this.id).subscribe(
      data => {
        this.userData = data;
        console.log(data);
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.success('Data loaded successfully.');
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Data loaded failed.');
      });
  }
  updateUser() {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.updateUser(this.userData).subscribe(
      data => {
        this.toastr.success('Updated successfully.');
        this.loadingService.toggleLoadingIndicator(false);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Some thing went wrong..!');
      });
  }
}
