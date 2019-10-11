import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';

@Injectable({
  providedIn: 'root'
})
export class FreeApiService {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any> {
      return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
  getcommentsbyparameters(): Observable<any> {
    const params1 = new HttpParams().set('userId', '1');
    return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/', {params: params1});
  }

  post(opost: Posts): Observable<any> {
    return this.httpclient.post('https://jsonplaceholder.typicode.com/posts', opost);
  }
}
