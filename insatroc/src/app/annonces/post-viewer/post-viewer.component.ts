import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post_model';
import {HttpService } from '../../http.service'


@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {
  posts : PostModel[] = [];
  sidetoggle = false;
  min = 0;
  max = 300;
  selected=[];
  maxprice=0;


  Annonces :PostModel[] = [{_id: null, title: "Vends un sac ", description: "je vends un sac pour venir sac si sac alors sac sac", category: "Autres", price: 50, urls: ['../../../assets/images/sac.jpg','../../../assets/images/coloredpencils.jpg']},
                           {_id: null, title: "Vends un sac de couchage ", description: "je vends un sac de couchage , trs inconfortable mais c'est mieux que rien", category: "Loisirs/Sport", price: 10, urls: ['../../../assets/images/sac.jpg']}
  ]
  annoncesFiltrees = this.Annonces.length;
  Annoncesv2 :PostModel[]= [];


  constructor(public httpservice: HttpService) { }

  log (status) {
    console.log(status)
  }

  ngOnInit(): void {
    console.log(this.Annonces)
    console.log(this.selected)
    console.log(this.maxprice)
    this.Annoncesv2 = this.httpservice.GetPost();
    console.log(this.Annoncesv2);
  }

  AddAnnounce(annonce : PostModel){}
  ResetFiltrage(){
    this.annoncesFiltrees = 0;
  }
  Filtrage(){
    this.annoncesFiltrees +=1;
  }
}