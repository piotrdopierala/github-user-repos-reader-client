import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoReaderService {
  private apiUrl: string = environment.apiUrl;
  offset = new Date().getTimezoneOffset();

  constructor(private http: HttpClient) { }

  public getRepositories(user): any {

    let req_headers = new HttpHeaders();
    req_headers.set('userTimeZone', this.offset.toString());

    this.http.get(`${this.apiUrl}/api/v1/getRepos/${user}`,
      { headers: req_headers }
    );

  };

}
