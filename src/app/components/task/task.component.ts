import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() title: string = '';
  @Input() completed: boolean = false;
  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeText(event: any) {
    this.text = event.target?.value;
  }

}
