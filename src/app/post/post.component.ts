import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postLovIts: number;
    @Input() postDislikeIts: number;
    @Input() postCreate_at: Date;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.postLovIts > this.postDislikeIts){
      return 'green';
    } else if (this.postLovIts < this.postDislikeIts) {
      return 'red';
    }
  }


}
