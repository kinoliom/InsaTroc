import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './annonces/post-create/post-create.component';
import { PostViewerComponent } from './annonces/post-viewer/post-viewer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ConnectionComponent } from './connection/connection.component';
import { CreateAccountComponent } from './create-account/create-account.component'

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'deposer-une-annonce', component: PostCreateComponent},
  {path: 'toutes-les-annonces', component: PostViewerComponent},
  {path: '', component: HomepageComponent},
  {path: 'connexion', component: ConnectionComponent},
  {path: 'creer-un-compte', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
