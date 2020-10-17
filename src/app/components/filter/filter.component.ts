import { Component, OnInit } from '@angular/core';
import { FILTER_CONFIG } from '../../config/filter-config';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public filters = FILTER_CONFIG;
  public appliedFilter = {};

  constructor(private dataservice: DataService, private router:Router) {
  }

  ngOnInit(): void {
    this.appliedFilter = this.dataservice.appliedFilter$.getValue();
  }

  selectFilter(key, value) {
    if (this.appliedFilter[key] === value) {
      delete this.appliedFilter[key];
    } else {
      this.appliedFilter[key] = value;
    }
    this.dataservice.appliedFilter$.next(this.appliedFilter);
    this.router.navigate(['/'], { queryParams: { filter: JSON.stringify(this.appliedFilter) } });
  }
}
