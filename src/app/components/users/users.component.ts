import { Component, OnInit } from '@angular/core';
import { Comments } from '../../classes/comments';
import { AppComponent } from '../../app.component';
import { FreeApiService } from '../../services/free-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // comments: Comments[];

  constructor(private freeApiService: FreeApiService) {}
  listcomments: Comments[];
  ngOnInit() {
    // this.comments = [
    //   {
    //     postId: 2,
    //     id: 1,
    //     name: premanshu,
    //     email: string;
    //     body: string;
    //   }
    // ]
    this.freeApiService.getcomments().subscribe(
      data => {
          this.listcomments = data;
        }
    );
  }

}
