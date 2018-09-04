import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = [
    {
      title: 'Mon premier post',
      content: "La dénomination vernaculaire huître désigne les mollusques marins bivalves de la famille des Ostreidae et plus largement de la super-famille des Ostreoidea. Les huitres ne vivent que dans l'eau salée ou saumâtre et se trouvent dans toutes les mers. Ces mollusques sessiles vivent à l'état naturel fixés sur un substrat rocheux.",
      lovIts: 0,
      dislikeIts: 0,
      create_at: 10/24/2047,
  
    }
  ]
}
