import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    AppComponent,
  ]
})
export class AppModule { }
