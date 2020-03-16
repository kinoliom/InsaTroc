import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './annonces/post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { PostViewerComponent } from './post-viewer/post-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
