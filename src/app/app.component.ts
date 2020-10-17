import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spacex-ui';
  public programs;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.subscribeToFilter();
  }

  subscribeToFilter() {
    this.dataService.appliedFilter$.pipe(skip(1)).subscribe(filter => {
      //this.router.navigate(['/'], { queryParams: { filter: JSON.stringify(filter) } });
    });
    this.route.queryParams.subscribe(async (params) => {
      if (params['filter']) {
        this.dataService.appliedFilter$.next(JSON.parse(params['filter']));
      }
      this.programs = await this.dataService.fetchProgram();
    });
  }
}
