import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/todocard';
import { todoArr } from '../../const/todocard';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
 todoData : Array<Ipost> = todoArr
  constructor() { }

  ngOnInit(): void {
    this.todoData = todoArr;
  }

}
