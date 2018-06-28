import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText = 'Button';
  @Input() buttonType: string = 'button';
  @Input() inversedButton: boolean = false;
  @Input() disabled: boolean = false;
  @Output() buttonClick: any = new EventEmitter<any>();
  @Input() glyphiconName: string;
  constructor() {}

  ngOnInit() {}

  eventClick(event) {
    this.buttonClick.emit(event);
  }
}
