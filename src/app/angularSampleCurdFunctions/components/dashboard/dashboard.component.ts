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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData: any[];
  createData: AddUser = new AddUser();
  addUserForm: FormGroup;
  constructor(private userService: UserService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.addUserForm = this._fb.group({
      firstName: [''],
      email: [''],
      lastName: ['']
    });
    this.getUsers();
  }


  getUsers() {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.getUsers('assets/metadata/userdata.json').subscribe(
      data => {
        this.userData = data ? data : null;
        console.log(data);
        this.loadingService.toggleLoadingIndicator(false);
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Data loaded failed.');
      }
    );
  }
  trackByFn(index, item) {
    return index;
  }

  addUser() {
    this.userData.push(this.createData);
    this.createData = new AddUser();
  }
}
