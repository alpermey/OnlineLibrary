/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* tslint-disable @typedef */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  test = 'Test has passed';
  constructor(private http: HttpClient) {}

  httpGet(url): any {
    return this.http.get(url);
  }

  httpPost(url, {}): any {
    return this.http.post(url, { name: 'Alper' });
  }

  sendEmail(url, data): any {
    return this.http.post(url, data);
  }
}
