import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  stud_det: any = []

  constructor(private stud:TodoServiceService) { }

  ngOnInit(): void {
    this.stud_det = this.stud.getStudent()
  }

}
