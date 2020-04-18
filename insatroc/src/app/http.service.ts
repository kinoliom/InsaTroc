import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostModel} from './annonces/post_model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private posts: PostModel[]= []
  public themeUpdater = new Subject<String>();

  constructor(private http: HttpClient) { }

  myMethod(){
    return console.log('Hey, what\'s up?');
  }

  getBeer(){
    //return this.http.get('https://api.openbrewerydb.org/breweries')
    // return this.http.get('http://localhost:3000/post_viewer');
    return this.http.get('http://localhost:3000/post-viewer'+ 43);
  }
  AddPost(post:PostModel){
    //requete post http vers backend pour stocker post dans BD
    this.posts.push(post);
    this.http.post<{response:string}>('http://localhost:3000/addPost',post).subscribe(
      (response) => { console.log(response)},
      (error) => {console.log(error)},
      
      
      );
    console.log(this.posts.length);
  }
  GetPost(){
    //requete get http vers backend pour récuperer les postes depuis la BD
    return this.posts;
  }
  onThemeUpdate(){
    return(this.themeUpdater.asObservable())
  }
  changetheme(theme?:String){
    this.themeUpdater.next(theme)

  }
}
