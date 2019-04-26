import { Component } from '@angular/core';
import { RepoReaderService } from './services/repo-reader.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Repository } from './models/Repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub repositories reader';
  userFrom: FormGroup;
  hasErrors: boolean = false;
  repositories: Repository[];

  constructor(private repositoryReaderServcie: RepoReaderService) {
  }

  ngOnInit() {
    this.userFrom = new FormGroup({
      gitHubUser: new FormControl('')
    });    
  }

  showRepos() {    
    this.repositories = null;
    let gitHubUser:string = this.userFrom.value["gitHubUser"];
    this.getRepositoriesList(gitHubUser);
  }

  getRepositoriesList(gitHubUser:string) {
    this.hasErrors = false;
    this.repositoryReaderServcie.getRepositories(gitHubUser)
      .subscribe(value => {
        this.repositories = value;
        console.log(value);
      }, err => this.hasErrors = true
      );
  }
}
