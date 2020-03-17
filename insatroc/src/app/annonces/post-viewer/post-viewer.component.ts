import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post_model';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {
  posts : PostModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
