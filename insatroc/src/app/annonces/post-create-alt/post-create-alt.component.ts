import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { PostModel } from '../post_model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-create-alt',
  templateUrl: './post-create-alt.component.html',
  styleUrls: ['./post-create-alt.component.css']
})
export class PostCreateAltComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _formBuilder: FormBuilder) { }
  Announce : PostModel;
  Announces = [];

  secondFormGroup: FormGroup;
  firstFormGroup: FormGroup;


  urls = [];


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.min(0)]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result);
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }


  PriceError (){
    if (this.firstFormGroup.value.price.hasError('required')) {
      return 'Veuillez saisir un prix';
    }
    if (this.firstFormGroup.value.price.hasError('min')) {
      return 'Veuillez saisir un prix valide';
    }
    return 'blablabla';
  }

  TitleError(){
    if(this.firstFormGroup.value.title.hasError('required')){
      return 'Veuillez remplir ce champ';
    }
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

  SavePostDescription (form: FormGroup) {
    console.log("SAVE POST DESCRIPTION");
    this.Announces.push(form.value.title,form.value.Description,form.value.category,form.value.price);
    console.log(this.Announces);
  }

  onSubmit(){
    console.log("ON SUBMIT");

  }

}
