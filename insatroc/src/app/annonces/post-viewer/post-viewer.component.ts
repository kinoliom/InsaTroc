import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post_model';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {
  posts : PostModel[] = [];
  sidetoggle = false;
  value;
  min = 0;
  max = 300;

  constructor() { }

  log (status) {
    console.log(status)
  }

  ngOnInit(): void {
  }

}
