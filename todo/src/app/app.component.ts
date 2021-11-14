import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tab: any;
  navLinks: any = [];
  activeLinkIndex = -1;
  background: ThemePalette = undefined;

  constructor (private router: Router) {
    this.navLinks = [
      {
          label: 'Todo List',
          link: './todo-list',
          index: 0
      }, {
          label: 'Todo Details',
          link: './todo-details',
          index: 1
      }, {
          label: 'SpaceX',
          link: './space-x',
          index: 2
      },
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find((tab: { link: string; }) => tab.link === '.' + this.router.url));
    });
  }
}
