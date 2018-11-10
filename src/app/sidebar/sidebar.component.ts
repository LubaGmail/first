import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd } from '@angular/router';

/**
  https://angular.io/guide/lifecycle-hooks
    ngOnInit
        ngDoCheck
    ngOnDestroy
    ngAfterViewInit
**/

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    this.router.events
      .subscribe( (event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
          console.log('NavigationEnd:', event);
        }
    });
  }

  ngOnInit() {
  }

}
