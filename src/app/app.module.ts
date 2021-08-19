import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
   
    BlogComponent,
    ContactComponent,
    
    PageNotFoundComponent,
    BlogContentComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
