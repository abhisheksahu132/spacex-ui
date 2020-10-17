import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public appliedFilter$ = new BehaviorSubject({});

  constructor(private http: HttpClient) {
  }

  fetchProgram = async () => {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    const filter = this.appliedFilter$.getValue();
    for (const key in filter) {
        url = `${url}&${key}=${filter[key]}`;
    }
    return this.http.get(url).toPromise();
  }
}
