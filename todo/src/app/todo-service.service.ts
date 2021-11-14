import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  displayedColumns: string[] = ['name', 'regno', 'sem', 'cgpa']

  student_data = [
    {name:"Rahul", regno: 201900111, sem: 4, cgpa: 9.2},
    {name:"Divya", regno: 201900222, sem: 6, cgpa: 8.5},
    {name:"Riya", regno: 201900333, sem: 2, cgpa: 9.7},
    {name:"Shekhar", regno: 201900444,sem:8, cgpa:7.8}
  ]

  getStudent() {
    return this.student_data
  }

  constructor() { }
}
