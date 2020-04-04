import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostModel } from '../post_model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-create-alt',
  templateUrl: './post-create-alt.component.html',
  styleUrls: ['./post-create-alt.component.css']
})
export class PostCreateAltComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  Announce : PostModel;
  Announces = [];

  ngOnInit(): void {
  }
  SavePost (form: NgForm) {
    if (form.invalid) {
      console.log("Invalid form");
      this._snackBar.open("Annonce invalide !","x")
      return;
    }
    this.Announces.push(form.value.title,form.value.Description,form.value.category,form.value.price);
    console.log(this.Announces);
  }

}