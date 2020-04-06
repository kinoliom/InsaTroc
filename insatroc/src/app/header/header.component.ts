import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidetoggle = false;
  loggedin = true;


  constructor() { }

  log (status) {
    console.log(status)
  }

  Disconnect(){
    this.loggedin = false;
  }

  ngOnInit(): void {
  }

}
