import { Component, inject } from '@angular/core';
import { ItemService } from '../item/service/item-service';
import { Item } from "../item/item";
import { IconSize } from '../item/interface/layout/icon-size';
import { GearSection } from "../gear-section/gear-section";

@Component({
  selector: 'app-bis-page',
  imports: [Item, GearSection],
  templateUrl: './bis-page.html',
  styleUrl: './bis-page.css'
})
export class BisPage {
  itemService = inject(ItemService);
  medium = IconSize.MEDIUM;
  large = IconSize.LARGE;
}
