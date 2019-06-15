import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  @Input() childMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
