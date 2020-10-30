import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes =  [
  { path: '', component: HomepageComponent},
  { path: 'about', component: AboutpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
