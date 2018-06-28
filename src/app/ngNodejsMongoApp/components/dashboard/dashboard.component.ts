import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { AddUser } from '../../model/add-user.model';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  userData: AddUser = new AddUser();
  constructor(private userService: UserService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loadingService.toggleLoadingIndicator(false);
    this.getUsers();
  }

  ngOnChanges(changes: any) {
    this.getUsers();
  }

  getUsers() {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.getUsers().subscribe(
      data => {
        this.userData = data;
        console.log(data);
        this.loadingService.toggleLoadingIndicator(false);
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Data loaded failed.');
      });
  }
  trackByFn(index, item) {
    return index;
  }

  deleteUser(id: any) {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.deleteUser(id).subscribe(
      data => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.success('Removed successfully.');
        this.getUsers();
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Some thing went wrong..!');
      });
  }
}
