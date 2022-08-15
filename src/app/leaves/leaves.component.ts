import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  @Input() parentData: string;
  constructor() { }
  @Output() public sendData = new EventEmitter<string>();

  ngOnInit(): void {
    this.sendData.emit("msg form sadn");
  }

}
