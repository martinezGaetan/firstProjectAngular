import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  loveIts: number;
  DislikeIts: number;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    if (!this.loveIts) {this.loveIts = 0}
    return this.loveIts += 1
  }
  onDislike() {
    if (!this.DislikeIts) {this.DislikeIts = 0}
    return this.DislikeIts += 1
  }

}
