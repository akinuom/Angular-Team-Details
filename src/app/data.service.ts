import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getContentJSON() {
    return this.http.get('./assets/data.json');
  }

  updateMember(member: any) {
  this.http.put(`./assets/data.json/${member.displayName}`, member, httpOptions);
}
}


