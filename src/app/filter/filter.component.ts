import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  data = {
    name: 'Nicoñas',
    lastName: 'asas'
  }

  filters = {
    type: 'image',
    state: 'active',
    date: '',
    order: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeOrder(value: string) {
    this.filters.order = value;
    this.filter();
  }

  changeDate(event: any) {
    this.filters.date = event.target?.value;
    this.filter();
  }

  filter() {
    console.log(this.filters);
    this.filterInService(this.filters)
  }

  filterInService(filter: any) {
    const data: any = {};
    if (filter.type !== '') {
      data.typeResource = filter.type;
    }
    if (filter.date !== '') {
      data.date = filter.date;
    }
    console.log(data);
    // this.http.post('url', data)
   }

}
