import { Injectable } from '@angular/core';
import {TSA_API} from '../app.api';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import { Relatorio } from './relatorio.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: Http) { }

  relatorios(): Observable<Relatorio[]> {
    return this.http.get(`${TSA_API}/relatorio`)
      .map(response => response.json());
      // .catch(ErrorHandler.handleError)
  }
}
