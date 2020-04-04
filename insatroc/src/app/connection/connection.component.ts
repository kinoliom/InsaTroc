import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  email = new FormControl('', [Validators.email]);
  password = new FormControl('', []);
  hide=true;

  constructor() { }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Veuillez remplir ce champ';
    }
    return this.email.hasError('email') ? 'Email non valide' : '';
  }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Veuillez remplir ce champ';
    }
    if (this.password.hasError('minlength')) {
      return 'Doit contenir au moins 5 caractères';
    }
    if (this.password.hasError('maxlength')) {
      return 'Ne doit pas contenir plus de 25 caractères';
    }

  }

  Login(form){}

  ngOnInit(): void {
  }

}
