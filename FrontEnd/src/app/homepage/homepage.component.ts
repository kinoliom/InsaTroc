import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    // this._http.getBeer().subscribe(data => {
    //   this.brews = data
    //   console.log(this.brews);
    // });
    this._http.getBeer();
    console.log(this._http.getBeer());
    console.log("blablabla homepage")
  }

}
