import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfiguration } from '../../../shared/services/app-config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  constructor(public appConfiguration: AppConfiguration,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }
}
