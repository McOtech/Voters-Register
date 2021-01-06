import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Member {
  id: number;
  fname: string;
  lname: string;
  regno: string;
  year: number;
  status: number;
  created: string;
}


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  searchMember(query) {
    return this.http.post<Member[]>(`/api/search`, {
      query
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  vote(id: number) {
    return this.http.post('/api/vote', {
      id
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  storeMember({fname, lname, regno, year}) {
    return this.http.post('/api/members', {
      fname, lname, regno, year
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  updateMember({id, fname, lname, regno, year}) {
    return this.http.post(`/api/members/${id}`, {
      fname, lname, regno, year
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  getMemberDetails(id: number) {
    return this.http.get<Member>(`/api/members/${id}`);
  }
}
