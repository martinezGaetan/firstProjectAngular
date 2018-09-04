import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  posts = [
    {
      title: 'mon 1er post',
      content: 'mon premier contenu',
      create_at: new Date('December 17, 1995 03:24:00')
    },
    {
      title: 'mon 2eme post',
      content: 'mon deuxième contenu',
      create_at: new Date('November 22, 2018 12:24:00')

    },
    {
      title: 'mon 3ème post',
      content: 'mon troisième contenu',
      create_at: new Date('January 30, 2017 13:30:05')

    },
    
  ]
  constructor() {}

}
