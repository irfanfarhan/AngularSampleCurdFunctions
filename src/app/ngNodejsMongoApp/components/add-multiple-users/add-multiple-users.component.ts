import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { XlsxToJsonService } from '../../services/xlsx-to-json-service';
import { UserService } from '../../services/user.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-multiple-users',
  templateUrl: './add-multiple-users.component.html',
  styleUrls: ['./add-multiple-users.component.scss']
})
export class AddMultipleUsersComponent implements OnInit {
  result: any = [];
  results: any = [];
  @ViewChild('fileInput') inputEl: ElementRef;
  filename: string;
  constructor(private xlsxToJsonService: XlsxToJsonService,
    private userService: UserService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.filename = '';
  }
  handleFile(event) {
    const inputEl: HTMLInputElement = this.inputEl.nativeElement;

    if (inputEl.files.length === 0) {
      return;
    } else {
      this.filename = '';
      const files: FileList = inputEl.files;
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        if (files.length === 1) {
          this.filename += files[i].name;
          this.filename = this.filename.replace(/\\/g, '/').replace(/.*\//, '').substring(0, 25);
        } else {
          this.filename = files.length + ' Files Selected';
        }
      }
    }
    const file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson([], file).subscribe(data => {
      this.result = data['sheets'].Sheet1;
      this.results = JSON.stringify(this.result);
    });
  }

  addUsers(data) {
    if (data) {
      for (const key of this.result) {
        this.createUsers(key);
      }
    }
  }
  createUsers(key) {
    this.loadingService.toggleLoadingIndicator(true);
    this.userService.addUser(key).subscribe(
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
