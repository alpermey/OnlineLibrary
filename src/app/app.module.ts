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
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { BookspageComponent } from './bookspage/bookspage.component';

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
    BookspageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
