import { Component, OnInit } from '@angular/core';
import { Posts } from '../../classes/posts';
import { FreeApiService } from '../../services/free-api.service';

@Component({
  selector: 'app-postmethod',
  templateUrl: './postmethod.component.html',
  styleUrls: ['./postmethod.component.css']
})
export class PostmethodComponent implements OnInit {

  constructor(private freeApiService: FreeApiService) {}
  objposts: Posts;

  ngOnInit() {
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
