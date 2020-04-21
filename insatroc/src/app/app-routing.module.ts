import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostViewerComponent } from './annonces/post-viewer/post-viewer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostCreateAltComponent } from './annonces/post-create-alt/post-create-alt.component';
import { ConnectionComponent} from './connection/connection.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'deposer-une-annonce', component: PostCreateAltComponent},
  {path: 'toutes-les-annonces', component: PostViewerComponent},
  {path: 'connexion', component: ConnectionComponent},
  {path: 'creer-un-compte', component: CreateAccountComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
