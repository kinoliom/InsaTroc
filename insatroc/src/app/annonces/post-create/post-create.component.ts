import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostModel } from '../post_model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }
  Announce : PostModel;
  Announces = [];

  ngOnInit(): void {
  }
  SavePost (form: NgForm) {
    this.Announces.push(form.value.title,form.value.Description);
    console.log(this.Announces);
  }

}
