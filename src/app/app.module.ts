/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookspageComponent } from './bookspage/bookspage.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './bookspage/dialog/dialog.component';
import { DialogemailComponent } from './bookspage/dialogemail/dialogemail.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogmessageComponent } from './bookspage/dialogmessage/dialogmessage.component';
import { DialogerrorComponent } from './bookspage/dialogerror/dialogerror.component';
import { DialogreturnComponent } from './bookspage/dialogreturn/dialogreturn.component';
import { DataService } from 'src/service/data.service';
import { HttpService } from 'src/service/http.service';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'about', component: AboutpageComponent},
  { path: 'books', component: BookspageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutpageComponent,
    HomepageComponent,
    BookspageComponent,
    DialogComponent,
    DialogemailComponent,
    DialogmessageComponent,
    DialogerrorComponent,
    DialogreturnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    // MatDialog,
    // MatDialogRef,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
],
  entryComponents: [DialogComponent, DialogemailComponent, DialogerrorComponent, DialogmessageComponent, DialogreturnComponent],
  providers: [DataService, HttpService, HttpClientModule, MatDialog, HttpClientModule,
    {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
