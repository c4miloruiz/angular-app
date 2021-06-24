import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'react-app';
  tasks = [
    {
      title: 'Mi Tarea',
      completed: false
    },
    {
      title: 'Mi Tarea 2',
      completed: true
    },
    {
      title: 'Mi Tarea 3',
      completed: false
    }
  ] 
}
