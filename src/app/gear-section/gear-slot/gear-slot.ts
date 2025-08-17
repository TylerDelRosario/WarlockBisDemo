import { Component, Input } from '@angular/core';
import { IconSize } from '../../item/interface/layout/icon-size';
import { ItemInfo } from '../../item/interface/item-info';
import { Item } from "../../item/item";
import { GearInfo } from '../interface/gear-info';

@Component({
  selector: 'app-gear-slot',
  imports: [Item],
  templateUrl: './gear-slot.html',
  styleUrl: './gear-slot.css'
})
export class GearSlot {
  @Input({required: true}) item: GearInfo | undefined = undefined;
  @Input() bonus!: ItemInfo[] | undefined;
  @Input() rightSided: boolean = false;
  @Input() weapon: boolean = false;
  small = IconSize.SMALL
  medium = IconSize.MEDIUM;
  large = IconSize.LARGE;
}
