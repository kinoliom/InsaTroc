import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormBuilder, FormGroup, AbstractControl, ValidatorFn} from '@angular/forms';
import { PostModel } from '../post_model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpService} from '../../http.service';
import {imageValidator} from './home-made.validator';


@Component({
  selector: 'app-post-create-alt',
  templateUrl: './post-create-alt.component.html',
  styleUrls: ['./post-create-alt.component.css']
})
export class PostCreateAltComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _formBuilder: FormBuilder,public httpService:HttpService) { }
  Announce : PostModel;
  Announces = [];
  free : Boolean = false;
  form: FormGroup;
  form2: FormGroup;
  urls = [];
  slideIndex = 0;
  selected = [];


  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl(null,{validators:[Validators.required, Validators.minLength(5)]}),
      category:new FormControl(null,{validators:[Validators.required]}),
      description: new FormControl(null,{validators:[Validators.required,Validators.minLength(10)]}),
      price: new FormControl(null,{validators:[Validators.min(0)]}),
      checkbox:new FormControl(null),
      //image:new FormControl(null,{validators:[imageValidator]})
    });
    this.form2 = new FormGroup({
      image:new FormControl(null,{validators:[imageValidator]})
    })

  }

  HidePrice(){
    this.free=!this.free;
    this.form.patchValue({price:999999})
    //this.form.controls['price'].disable();
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader2 = new FileReader();
        var reader = new FileReader();
        reader.onload = (event:any) => {
          this.urls.push(event.target.result);
        }
        reader2.onload = () => {
          this.form2.get('image').patchValue(reader2.result);
          this.form2.get('image').updateValueAndValidity();
          if (!this.form2.get('image').hasError('chocoloco')){
            reader.readAsDataURL(event.target.files[i]);
            //uploadi l9lawi
          }else {
            console.log('7chi l mok')
            //mat uploadich l9lawi
          }

        }
        reader2.readAsArrayBuffer(event.target.files[i]);
      }
    }

  }

  DeletePicture(i){
    this.urls.splice(i,1);
  }

  PlusSlides(n) {
    this.slideIndex+=n;
    console.log("plusslides");
  }

  currentSlide(n) {
    this.slideIndex = n;
  }

  SavePost (form: FormGroup) {
    if (form.invalid || this.urls.length>5) {
      console.log("Invalid form");
      this._snackBar.open("Annonce invalide !","x")
      return;
    }

    const annonce : PostModel = {
      _id:null,
      title:this.form.value.title,
      description:this.form.value.description,
      category:this.form.value.category,
      price:this.form.value.price,
      urls: this.urls,
      date: new Date(),
      views: 0
    }
    this.httpService.AddPost(annonce);
    this.form.reset();
    this.urls = [];
    // redirigier vers l'annonce quand on aura fait un composant pour voir une annonce selon l'ID
  }

}
