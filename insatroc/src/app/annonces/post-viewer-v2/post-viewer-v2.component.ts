import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post_model';
import { Injectable } from '@angular/core';
import {HttpService } from '../../http.service'



@Component({
  selector: 'app-post-viewer-v2',
  templateUrl: './post-viewer-v2.component.html',
  styleUrls: ['./post-viewer-v2.component.css']
})
export class PostViewerV2Component implements OnInit {
  public httpservice: HttpService;

  Annonces :PostModel[] = [{_id: null, title: "Vends un sac ", description: "je vends un sac pour venir sac si sac alors sac sac", category: "catégorie1", price: 50, urls: ['../../../assets/images/sac.jpg']},
                           {_id: null, title: "Vends un sac de couchage ", description: "je vends un sac de couchage , trs inconfortable mais c'est mieux que rien", category: "catégorie2", price: 10, urls: ['../../../assets/images/sac.jpg']}
  ]
  Annoncesv2 :PostModel[]= [];

  constructor() { }

  ngOnInit(): void {
    this.Annoncesv2 = this.httpservice.GetPost();
    console.log(this.Annoncesv2)
  }



}
