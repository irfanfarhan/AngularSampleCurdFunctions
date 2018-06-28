import { Directive, Input, HostBinding } from '@angular/core';

// todo: add animate
// todo: add init and on change
@Directive({ selector: '[open]' })
export class ModalOpen {
  @HostBinding('style.display') public display: string;
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded')
  public isExpanded: boolean = true;

  @Input()
  public set open(value: boolean) {
    this.isExpanded = value;
    this.toggle();
  }

  public get open(): boolean {
    return this.isExpanded;
  }

  constructor() {}

  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide() {
    this.isExpanded = false;
    this.display = 'none';

    let backDrop = document.getElementsByClassName('modal-backdrop');
    if (backDrop.length > 0) {
      document.body.removeChild(backDrop[0]);
    }
  }

  show() {
    let backDrop = document.createElement('div');
    backDrop.className = 'modal-backdrop fade in';
    document.body.appendChild(backDrop);
    this.isExpanded = true;
    this.display = 'block';
  }
}
