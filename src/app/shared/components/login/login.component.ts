import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../ngNodejsMongoApp/services/user.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: any = [];
  constructor(private userService: UserService,
    private _fb: FormBuilder,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.loadingService.toggleLoadingIndicator(true);
    console.log(this.loginData);
    this.userService.login(this.loginData).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Login successfully');
        this.loadingService.toggleLoadingIndicator(false);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loadingService.toggleLoadingIndicator(false);
        this.toastr.error('Login Failed');
      });
  }
}
