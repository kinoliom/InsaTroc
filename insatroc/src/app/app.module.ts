import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './annonces/post-create/post-create.component';
import { PostViewerComponent } from './annonces/post-viewer/post-viewer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ConnectionComponent } from './connection/connection.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PostCreateAltComponent } from './annonces/post-create-alt/post-create-alt.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button/';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostViewerComponent,
    HeaderComponent,
    ConnectionComponent,
    CreateAccountComponent,
    HomepageComponent,
    PostCreateAltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
