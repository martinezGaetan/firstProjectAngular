import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreate_at: any;
  loveIts: number = 0;
  DislikeIts: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    return this.loveIts += 1
  }
  onDislike() {
    return this.DislikeIts += 1
  }

}
