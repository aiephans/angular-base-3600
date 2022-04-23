import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any;
  @Output() childId = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickChild(id:number){
    //console.log("click hijo:"+ id);
    this.childId.emit(id);
  }

}
