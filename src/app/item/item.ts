import { Component, ElementRef, Input, signal, ViewChild, WritableSignal } from '@angular/core';
import { ItemInfo } from './interface/item-info';
import { NgStyle } from '@angular/common';
import { SizeInfo } from './interface/layout/size-info';
import { IconSize } from './interface/layout/icon-size';

@Component({
  selector: 'app-item',
  imports: [NgStyle],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  @Input({required: true}) info!: ItemInfo;
  @Input({required: true}) size!: SizeInfo;
  containerStyles!: object;
  itemStyles!: object;
  insetStyles!: object;
  insetStyleHover!: object;
  isHovered: boolean = false;

  //Tooltip Signals
  xOffset: WritableSignal<number> = signal(0);
  yOffset: WritableSignal<number> = signal(0);

  @ViewChild('icon') tooltip!: ElementRef;
  //CLIENT BOUNDING BOX/COORDINATES
  top!: number;
  right!: number;
  left!: number;
  bottom!: number;

  ngOnInit() {
    this.containerStyles = {
      'width': this.size.length + "px",
      'height': this.size.length + "px",
      'background': this.size.bgOffset + 'px ' + this.size.bgOffset + 'px ' + 'no-repeat '
        + "url(https://wow.zamimg.com/images/wow/icons/"+ this.size.name +"/" + this.info.icon + ".jpg)",
    }

    this.itemStyles = {
      'width': this.size.length + "px",
      'height': this.size.length + "px",
    }

    this.insetStyles = {
      'width': this.size.inset + "px",
      'height': this.size.inset + "px"
    }

    this.insetStyleHover = {
      'width': this.size.inset + "px",
      'height': this.size.inset + "px",
      'background-image': 'url(https://wow.zamimg.com/images/Icon/medium/hilite/default.png)',
    }
  }

  ngOnChanges() {
    this.containerStyles = {
      'width': this.size.length + "px",
      'height': this.size.length + "px",
      'background': this.size.bgOffset + 'px ' + this.size.bgOffset + 'px ' + 'no-repeat '
        + "url(https://wow.zamimg.com/images/wow/icons/"+ this.size.name +"/" + this.info.icon + ".jpg)",
    }

    this.itemStyles = {
      'width': this.size.length + "px",
      'height': this.size.length + "px",
    }

    this.insetStyles = {
      'width': this.size.inset + "px",
      'height': this.size.inset + "px"
    }

    this.insetStyleHover = {
      'width': this.size.inset + "px",
      'height': this.size.inset + "px",
      'background-image': 'url(https://wow.zamimg.com/images/Icon/medium/hilite/default.png)',
    }
  }

  ngAfterViewChecked() {
    const boundingBox = this.tooltip.nativeElement.getBoundingClientRect();

    this.top = boundingBox.top + window.pageYOffset;
    this.right = boundingBox.right + window.pageXOffset;
    this.bottom = boundingBox.bottom + window.pageYOffset;
    this.left = boundingBox.left + window.pageXOffset;
  }

  mouseOver(event: MouseEvent) {
    this.isHovered = true;
  }

  mouseOut() {
    this.isHovered = false;
  }

  mouseMove(event: MouseEvent) {
    if (this.size === IconSize.SMALL) {
      this.xOffset.set(event.clientX - this.left + 20);
    } else {
      this.xOffset.set(event.pageX - this.left + 20);
      console.log(this.left)
    }
    

    if (this.info.itemSet) {
      this.yOffset.set(event.pageY - (this.top) - 100);
    } else {
      this.yOffset.set(event.pageY - (this.top) - 30 );
    }
  }

  hovered() {
    if (this.isHovered) {
      return this.insetStyleHover;
    } else {
      return this.insetStyles;
    }
  }
}
