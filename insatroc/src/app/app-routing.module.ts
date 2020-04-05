import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './annonces/post-create/post-create.component';
import { PostViewerComponent } from './annonces/post-viewer/post-viewer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostCreateAltComponent } from './annonces/post-create-alt/post-create-alt.component';
import { PostCreateReaComponent } from './annonces/post-create-rea/post-create-rea.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'deposer-une-annonce-rea', component: PostCreateReaComponent},
  {path: 'deposer-une-annonce-alt', component: PostCreateAltComponent},
  {path: 'deposer-une-annonce', component: PostCreateComponent},
  {path: 'toutes-les-annonces', component: PostViewerComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
