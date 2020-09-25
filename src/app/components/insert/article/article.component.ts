import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article:any;
  @Output() close:EventEmitter<void>;

  constructor() {
      this.close = new EventEmitter<void>();
  }

  ngOnInit(): void {
      console.log(this.article);
  }

  closeArticle(){
      this.close.emit();
  }

  formatDate(date:string){
      return new Date(date).toLocaleString();
  }
}
