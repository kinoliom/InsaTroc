import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostModel} from './annonces/post_model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private posts: PostModel[]= []

  constructor(private http: HttpClient) { }

  myMethod(){
    return console.log('Hey, what\'s up?');
  }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
  AddPost(post:PostModel){
    //requete post http vers backend pour stocker post dans BD 
    this.posts.push(post);
    console.log(this.posts.length);
  }
  GetPost(){
    //requete get http vers backend pour récuperer les postes depuis la BD
    return this.posts
  }
}
