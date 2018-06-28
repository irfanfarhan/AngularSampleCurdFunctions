import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddUser } from '../../model/add-user.model';
import { UserService } from '../../services/user.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userData: AddUser = new AddUser();
  createUserForm: FormGroup;
  constructor(private userService: UserService,
    private _fb: FormBuilder,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.createUserForm = this._fb.group({
      username: [''],
      firstName: [''],
      email: ['', Validators.required],
      lastName: [''],
      password: [''],
      confirmPassword: [''],
      role: ['']
    });
  }
  createUser() {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.addUser(this.userData).subscribe(
      data => {
        if (data.email) {
          this.toastr.success((data.firstName ? data.firstName : '') + ' ' + (data.lastName ? data.lastName : '') + ' added successfully');
        } else {
          this.toastr.error('User Already Exists..!');
        }

        this.loadingService.toggleLoadingIndicator(false);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Some thing went wrong..!');
      });
  }
}
