import { Component, OnInit } from '@angular/core';
import { FreeApiService } from '../../services/free-api.service';
import { Posts } from '../../classes/posts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private freeApiService: FreeApiService) {}

  listposts: Posts[];
  ngOnInit() {
    this.freeApiService.getcommentsbyparameters().subscribe(
      data => {
        this.listposts = data;
      }
    );
  }

}
