import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../domain/quote.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }

  getQuote(): Observable<Quote> {
    const url = `${this.config.url}/quotes/${Math.floor(Math.random() * 7)}`;
    return this.http.get(url)
      .debug('quote: ')
      .map(res => res as Quote);
  }
}
