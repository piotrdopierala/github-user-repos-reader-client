import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {
  @Input() repositories: Repository[];
  constructor() { }

  ngOnInit() {
  }

}
