import { Component, Input } from '@angular/core';
import { ItemInfo } from '../../item/interface/item-info';
import { GearInfo } from '../interface/gear-info';
import { Item } from "../../item/item";
import { IconSize } from '../../item/interface/layout/icon-size';

@Component({
  selector: 'app-gear-table',
  imports: [Item],
  templateUrl: './gear-table.html',
  styleUrl: './gear-table.css'
})
export class GearTable {
  @Input({required: true}) items: GearInfo[] = [];
  @Input({required: true}) name: string = "";

  small = IconSize.SMALL
}
