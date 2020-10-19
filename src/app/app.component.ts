import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { skip, debounceTime } from 'rxjs/internal/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spacex-ui';
  public programs: any = [];
  public isLoding = true;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.subscribeToQueryParam();
  }

  async ngOnInit() {

  };
  subscribeToQueryParam() {
    this.route.queryParams.pipe(debounceTime(200)).subscribe(async (params) => {
      if (params['filter']) {
        this.dataService.appliedFilter$.next(JSON.parse(params['filter']));
      }
      this.isLoding = true;
      this.programs = await this.dataService.fetchProgram();
      this.isLoding = false;
    });
  }
}
