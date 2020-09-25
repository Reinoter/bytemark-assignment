import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() article:any;
  @Output() load:EventEmitter<void>;

  constructor() {
      this.load = new EventEmitter<void>();
  }

  ngOnInit(): void {}

  ngAfterViewInit(){
      this.load.emit();
  }
}
