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
  repositories : Repository[];

  constructor(private repositoryReaderServcie: RepoReaderService) {
  }

  ngOnInit() {
    this.userFrom = new FormGroup({
      gitHubUser: new FormControl('')
    });
    this.getRepositoriesList();
  }

  getRepositoriesList() {
    console.log('in getRepositoriesList ...')
    this.hasErrors=false;
    this.repositoryReaderServcie.getRepositories('piotrdopierala')
      .subscribe(value => {        
        this.repositories = value;
      }, err => this.hasErrors = true
      );      
  }
}
