import { Component } from '@angular/core';
import { RepoReaderService } from './services/repo-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub repositories reader';
   constructor(private repositoryReaderServcie : RepoReaderService){
   }

  ngOnInit(){
    console.log('in init of app component ...');
    this.getRepositoriesList();
  }

  getRepositoriesList(){
    console.log('in getRepositoriesList ...')
    this.repositoryReaderServcie.getRepositories('piotrdopierala').subscribe((value)=>{console.log('Received value: ',value)});
  }
}
