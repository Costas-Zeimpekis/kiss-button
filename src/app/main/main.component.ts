import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts = [];
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts.sources;
      console.log('This is posts', posts);
    });
  }
}
