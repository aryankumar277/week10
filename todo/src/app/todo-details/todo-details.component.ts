import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent {
  constructor(private stud:TodoServiceService) { }

  displayedColumns: string[] = ['regno', 'name', 'sem', 'cgpa'];
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = this.stud.getStudent()
  }
}
