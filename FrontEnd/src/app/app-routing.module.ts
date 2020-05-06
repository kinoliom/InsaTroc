import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './annonces/post-create/post-create.component';
import { PostViewerComponent } from './annonces/post-viewer/post-viewer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostCreateAltComponent } from './annonces/post-create-alt/post-create-alt.component';
import { PostCreateReaComponent } from './annonces/post-create-rea/post-create-rea.component';
import { ConnectionComponent} from './connection/connection.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PostViewerByIdComponent } from './annonces/post-viewer-by-id/post-viewer-by-id.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'Annonces', component: PostViewerV2Component},
  {path: 'deposer-une-annonce-rea', component: PostCreateReaComponent},
  {path: 'deposer-une-annonce-alt', component: PostCreateAltComponent},
  {path: 'deposer-une-annonce', component: PostCreateComponent},
  {path: 'toutes-les-annonces', component: PostViewerComponent},
  {path: 'connexion', component: ConnectionComponent},
  {path: 'creer-un-compte', component: CreateAccountComponent},
  {path: '', component: HomepageComponent},
  {path: 'annonce/:id', component: PostViewerByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
