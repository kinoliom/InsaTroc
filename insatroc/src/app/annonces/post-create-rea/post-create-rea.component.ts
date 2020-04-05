import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from '../post_model';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-post-create-rea',
  templateUrl: './post-create-rea.component.html',
  styleUrls: ['./post-create-rea.component.css']
})
export class PostCreateReaComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  Announce : PostModel;
  Announces = [];
  free : Boolean = true;
  form : FormGroup;

  ngOnInit(): void {
    console.log("ngOnInit starts");
    this.form = new FormGroup({
      'title':new FormControl(null,{validators:[Validators.required, Validators.minLength(5)]}),
      'description': new FormControl(null,{validators:[Validators.required,Validators.minLength(10)]}),
      'category':new FormControl(null,{validators:[Validators.required]}),
      'checkbox':new FormControl(null),
      'price': new FormControl(null,{validators:[Validators.min(1)]}),
    });
  }
  HidePrice(){
    this.free=!this.free;
    this.form.value.price=null;
  }
  SavePost () {
    if (this.form.invalid) {
      console.log("Invalid form");
      this._snackBar.open("Annonce invalide !","x")
      console.log(this.form.value.checkbox)
      return;
    }
    const annonce : PostModel = {_id:null,
      title:this.form.value.title,
      description:this.form.value.description,
      category:this.form.value.category,
      price:this.form.value.price
    }
    this.Announces.push(annonce);
    console.log(this.Announces);
    //this.form.markAsPristine();
    this.form.reset();
    //this.form.markAsPristine();
    //this.form.clearValidators();
  }

}