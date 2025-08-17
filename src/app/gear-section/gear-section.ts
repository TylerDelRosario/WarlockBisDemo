import { Component, inject, Input, signal} from '@angular/core';
import { ItemService } from '../item/service/item-service';
import { IconSize } from '../item/interface/layout/icon-size';
import { GearSlot } from "./gear-slot/gear-slot";
import { GearService } from './service/gear-service';
import { GearInfo } from './interface/gear-info';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { GearSet } from './interface/gear-set';
import { GearTable } from "./gear-table/gear-table";

@Component({
  selector: 'app-gear-section',
  imports: [GearSlot, ReactiveFormsModule, GearTable],
  templateUrl: './gear-section.html',
  styleUrl: './gear-section.css'
})
export class GearSection {
  itemService = inject(ItemService);
  gearService = inject(GearService);
  small = IconSize.SMALL
  medium = IconSize.MEDIUM;
  large = IconSize.LARGE;
  currentVariation: string = 'recommended';
  currentSpec: GearSet = this.gearService.affliction;
  spec: string = "affliction";
  choice: string = "recommended";
  oneHanded: boolean = false;

  head = signal(this.getPiece(this.currentSpec.head));
  neck = signal(this.getPiece(this.currentSpec.neck));
  shoulder = signal(this.getPiece(this.currentSpec.shoulder));
  back = signal(this.getPiece(this.currentSpec.back));
  robe = signal(this.getPiece(this.currentSpec.robe));
  wrist = signal(this.getPiece(this.currentSpec.wrist));
  hands = signal(this.getPiece(this.currentSpec.hands));
  waist = signal(this.getPiece(this.currentSpec.waist));
  leggings = signal(this.getPiece(this.currentSpec.leggings));
  feet = signal(this.getPiece(this.currentSpec.feet));
  ringOne = signal(this.getPiece(this.currentSpec.rings));
  ringTwo = signal(this.getSecondPiece(this.currentSpec.rings));
  trinketOne = signal(this.getPiece(this.currentSpec.trinkets));
  trinketTwo = signal(this.getSecondPiece(this.currentSpec.trinkets));
  one_hand = signal(this.getPiece(this.currentSpec.one_hand));
  offhand = signal(this.getPiece(this.currentSpec.offhand));
  two_hand = signal(this.getPiece(this.currentSpec.two_hand));
  wands = signal(this.getPiece(this.currentSpec.wands));

  headList = signal(this.gearService.affliction.head);
  neckList = signal(this.gearService.affliction.neck);

  setOptions: FormControl = new FormControl('Affliction');
  specOptions: FormControl = new FormControl('Recommended');

  ngOnInit() {
    this.setOptions.valueChanges.subscribe(value => {
      let choice = String(value).toLowerCase();
      
      if (choice === "sm/ruin") {
        this.spec = choice;
        this.currentSpec = this.gearService.smRuin;
        this.updateSet();

        if (this.choice === "best") {
          this.oneHanded = true;
        }

        if (this.choice === "affordable") {
          this.oneHanded = false;
        }

        if (this.choice === "recommended") {
          this.oneHanded = true;
        }
      }
      else if (choice === "affliction") {
        this.spec = choice;
        this.currentSpec = this.gearService.affliction;
        this.updateSet();

        if (this.choice === "best") {
          this.oneHanded = true;
        }

        if (this.choice === "affordable") {
          this.oneHanded = false;
        }

        if (this.choice === "recommended") {
          this.oneHanded = false;
        }
      }
    });

    this.specOptions.valueChanges.subscribe(value => {
      let choice = value;
      if (choice === "Min/Max") {
        choice = 'best'

        if (this.spec === "affliction") {
          this.oneHanded = true;
        }

        if (this.spec === "sm/ruin") {
          this.oneHanded = true;
        }

        this.choice = choice.toLowerCase();
      }

      if (choice === "Dungeons Only") {
        choice = 'affordable'

        if (this.spec === "affliction") {
          this.oneHanded = false;
        }

        if (this.spec === "sm/ruin") {
          this.oneHanded = false;
        }

        this.choice = choice.toLowerCase();
      }

      if (choice === "Recommended") {
        if (this.spec === "affliction") {
          this.oneHanded = false;
        }

        if (this.spec === "sm/ruin") {
          this.oneHanded = true;
        }

        this.choice = choice.toLowerCase();
      }

      this.currentVariation = String(choice).toLowerCase();
      this.updateSet();
    });
  }

  getPiece(items: GearInfo[]): GearInfo | undefined {
    for (let i = 0; i < items.length; i++) {
      const current = items[i];

      if (current.bis?.includes(this.currentVariation)) {
        return current;
      }
    }

    return undefined;
  }

  getSecondPiece(items: GearInfo[]): GearInfo | undefined {
    let found = false;
    for (let i = 0; i < items.length; i ++) {
      const current = items[i];

      if (current.bis?.includes(this.currentVariation)) {
        if (found) {
          return current;
        }

        found = true;
      }
    }

    return undefined;
  }

  updateSet() {
    this.head.set(this.getPiece(this.currentSpec.head));
    console.log(this.head())
    this.neck.set(this.getPiece(this.currentSpec.neck));
    this.shoulder.set(this.getPiece(this.currentSpec.shoulder));
    this.back.set(this.getPiece(this.currentSpec.back));
    this.robe.set(this.getPiece(this.currentSpec.robe));
    this.wrist.set(this.getPiece(this.currentSpec.wrist));
    this.hands.set(this.getPiece(this.currentSpec.hands));
    this.waist.set(this.getPiece(this.currentSpec.waist));
    this.leggings.set(this.getPiece(this.currentSpec.leggings));
    this.feet.set(this.getPiece(this.currentSpec.feet));
    this.ringOne.set(this.getPiece(this.currentSpec.rings));
    this.ringTwo.set(this.getSecondPiece(this.currentSpec.rings));
    this.trinketOne.set(this.getPiece(this.currentSpec.trinkets));
    this.trinketTwo.set(this.getSecondPiece(this.currentSpec.trinkets));
    this.one_hand.set(this.getPiece(this.currentSpec.one_hand));
    this.offhand.set(this.getPiece(this.currentSpec.offhand));
    this.two_hand.set(this.getPiece(this.currentSpec.two_hand));
    this.wands.set(this.getPiece(this.currentSpec.wands));
  }
}
