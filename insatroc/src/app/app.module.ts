import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostViewerComponent } from './annonces/post-viewer/post-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button/';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomepageComponent } from './homepage/homepage.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



import {HttpClientModule} from '@angular/common/http';
import { PostCreateAltComponent } from './annonces/post-create-alt/post-create-alt.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConnectionComponent} from './connection/connection.component';
import { CreateAccountComponent} from './create-account/create-account.component';
import {MatBadgeModule} from '@angular/material/badge';
import { PostViewerByIdComponent } from './annonces/post-viewer-by-id/post-viewer-by-id.component';



@NgModule({
  declarations: [
    AppComponent,
    PostViewerComponent,
    HeaderComponent,
    HomepageComponent,
    PostCreateAltComponent,
    ConnectionComponent,
    CreateAccountComponent,
    PostViewerByIdComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    HttpClientModule,
    MatStepperModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
