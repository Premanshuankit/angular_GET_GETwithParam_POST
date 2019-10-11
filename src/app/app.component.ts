import { Component } from '@angular/core';
import { FreeApiService } from './services/free-api.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freeApi';

  constructor(private freeApiService: FreeApiService) {}
  listcomments: Comments[];
  listposts: Posts[];
  objposts: Posts;
  ngOnInit() {
    this.freeApiService.getcomments().subscribe(
      data => {
          this.listcomments = data;
        }
    );

    this.freeApiService.getcommentsbyparameters().subscribe(
      data => {
        this.listposts = data;
      }
    );

    const opost = new Posts();
    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 5;

    this.freeApiService.post(opost).subscribe(
      data => {
        this.objposts = data;
      }
    );
  }
}
