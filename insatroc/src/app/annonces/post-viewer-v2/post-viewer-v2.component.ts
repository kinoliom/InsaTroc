import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post_model';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-post-viewer-v2',
  templateUrl: './post-viewer-v2.component.html',
  styleUrls: ['./post-viewer-v2.component.css']
})
export class PostViewerV2Component implements OnInit {

  Annonces :PostModel[] = [{_id: null, title: "Vends un sac ", description: "je vends un sac pour venir sac si sac alors sac sac", category: "catégorie1", price: 50, urls: ['../../../assets/images/sac.jpg']},
                           {_id: null, title: "Vends un sac de couchage ", description: "je vends un sac de couchage , trs inconfortable mais c'est mieux que rien", category: "catégorie2", price: 10, urls: ['../../../assets/images/sac.jpg']}
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.Annonces)
  }

  AddAnnounce(annonce : PostModel){

  }


}
