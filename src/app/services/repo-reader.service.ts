import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoReaderService {
  private apiUrl: string = environment.apiUrl;
  offset:number = (-1)*new Date().getTimezoneOffset();

  constructor(private http: HttpClient) { }

  public getRepositories(user): Observable<any> {

    let req_headers : HttpHeaders = new HttpHeaders()
      .set('clientTimeZoneOffset', this.offset.toString());

    console.log(req_headers.keys());
    return this.http.get(`${this.apiUrl}/api/v1/getRepos/${user}`,
      { headers: req_headers}  
    );

  };

}
