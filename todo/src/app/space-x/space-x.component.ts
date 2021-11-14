import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SpaceXComponent implements OnInit {
  dataSource: any;
  columnsToDisplay = ['mission_id', 'mission_name'];
  expandedItem: null | undefined;
  link_api = 'https://api.spacexdata.com/v3/missions';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.link_api).subscribe((responseData: any) => {
      this.dataSource = responseData;
    })
  }

}
