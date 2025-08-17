import { inject, Injectable } from '@angular/core';
import { GearSet } from '../interface/gear-set';
import { ItemService } from '../../item/service/item-service';

@Injectable({
  providedIn: 'root'
})
export class GearService {
  itemService: ItemService = inject(ItemService);
  affliction: GearSet = {
    head: [
      {
        piece: this.itemService.headInfo[6],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Best',
        bis: "best"
      },
      {
        piece: this.itemService.headInfo[0],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Great',
        bis: "recommended affordable"
      },
      {
        piece: this.itemService.headInfo[4],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.headInfo[5],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Good',
        bis: undefined
      }, 
      {
        piece: this.itemService.headInfo[3],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.headInfo[2],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.headInfo[1],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Good',
        bis: undefined
      },
    ],
    neck: [
      {
        piece: this.itemService.neckInfo[5],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.neckInfo[1],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Great',
        bis: 'recommended affordable'
      },
      {
        piece: this.itemService.neckInfo[4],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.neckInfo[2],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.neckInfo[3],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
    ],
    shoulder: [
      {
        piece: this.itemService.shoulderInfo[3],
        bonus: [],
        quality: 'Best',
        bis: "best"
      },
      {
        piece: this.itemService.shoulderInfo[4],
        bonus: [],
        quality: 'Great',
        bis: "recommended"
      },
      {
        piece: this.itemService.shoulderInfo[0],
        bonus: [],
        quality: 'Great',
        bis: "affordable"
      },
      {
        piece: this.itemService.shoulderInfo[2],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.shoulderInfo[1],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
    ],
    back: [
      {
        piece: this.itemService.cloakInfo[0],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.cloakInfo[1],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.cloakInfo[5],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.cloakInfo[2],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.cloakInfo[3],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Good',
        bis: undefined
      }
    ],
    robe: [
      {
        piece: this.itemService.chestInfo[0],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Best',
        bis: 'best recommended'
      },
      {
        piece: this.itemService.chestInfo[1],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.chestInfo[2],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: 'affordable'
      },
      {
        piece: this.itemService.chestInfo[3],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: undefined
      },
    ],
    wrist: [
      {
        piece: this.itemService.bracerInfo[3],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.bracerInfo[2],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.bracerInfo[1],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.bracerInfo[0],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Good',
        bis: 'affordable'
      },
    ],
    hands: [
      {
        piece: this.itemService.handInfo[1],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.handInfo[2],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.handInfo[0],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: 'affordable'
      },
    ],
    waist: [
      {
        piece: this.itemService.waistInfo[2],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.waistInfo[0],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.waistInfo[3],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.waistInfo[1],
        bonus: [],
        quality: 'Good',
        bis: undefined
      }
    ],
    leggings: [
      {
        piece: this.itemService.leggingInfo[3],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Best',
        bis: 'best recommended'
      },
      {
        piece: this.itemService.leggingInfo[0],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Great',
        bis: 'affordable'
      },
      {
        piece: this.itemService.leggingInfo[1],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.leggingInfo[2],
        bonus: [this.itemService.enchantInfo[2]],
        quality: 'Great',
        bis: undefined
      }
    ],
    feet: [
      {
        piece: this.itemService.feetInfo[0],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.feetInfo[1],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.feetInfo[2],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.feetInfo[3],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: undefined
      }
    ],
    rings: [
      {
        piece: this.itemService.ringInfo[2],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Best',
        bis: 'best recommended'
      },
      {
        piece: this.itemService.ringInfo[3],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.ringInfo[1],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Great',
        bis: 'recommended affordable'
      },
      {
        piece: this.itemService.ringInfo[7],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.ringInfo[0],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: 'affordable'
      }
    ],
    trinkets: [
      {
        piece: this.itemService.trinketInfo[0],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.trinketInfo[1],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.trinketInfo[2],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.trinketInfo[3],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.trinketInfo[4],
        bonus: [],
        quality: 'Great',
        bis: undefined
      }
    ],
    one_hand: [
      {
        piece: this.itemService.oneHandInfo[0],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.oneHandInfo[4],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.oneHandInfo[1],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: 'recommended affordable'
      },
      {
        piece: this.itemService.oneHandInfo[2],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: undefined
      },
    ],
    offhand: [
      {
        piece: this.itemService.offHandInfo[0],
        bonus: [],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.offHandInfo[1],
        bonus: [],
        quality: 'Great',
        bis: 'recommended affordable'
      },
      {
        piece: this.itemService.offHandInfo[4],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.offHandInfo[3],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.offHandInfo[2],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
    ],
    two_hand: [
      {
        piece: this.itemService.twoHandInfo[0],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.twoHandInfo[2],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.twoHandInfo[3],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: 'affordable'
      },
      {
        piece: this.itemService.twoHandInfo[4],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.twoHandInfo[3],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Good',
        bis: undefined
      }
    ],
    wands: [
      {
        piece: this.itemService.wandInfo[2],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.wandInfo[0],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.wandInfo[1],
        bonus: [],
        quality: 'Great',
        bis: undefined
      }
    ]
  }

  smRuin:GearSet = {
    head: [
      {
        piece: this.itemService.headInfo[0],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Best',
        bis: "best recommended affordable"
      },
      {
        piece: this.itemService.headInfo[4],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.headInfo[5],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: 'affordable'
      }, 
      {
        piece: this.itemService.headInfo[3],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.headInfo[2],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.headInfo[1],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: undefined
      },
    ],
    neck: [
      {
        piece: this.itemService.neckInfo[1],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.neckInfo[4],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.neckInfo[2],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.neckInfo[3],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
    ],
    shoulder: [
      {
        piece: this.itemService.shoulderInfo[5],
        bonus: [],
        quality: 'Best',
        bis: "best"
      },
      {
        piece: this.itemService.shoulderInfo[4],
        bonus: [],
        quality: 'Great',
        bis: "recommended"
      },
      {
        piece: this.itemService.shoulderInfo[0],
        bonus: [],
        quality: 'Good',
        bis: 'affordable'
      },
      {
        piece: this.itemService.shoulderInfo[1],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.shoulderInfo[2],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
    ],
    back: [
      {
        piece: this.itemService.cloakInfo[0],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.cloakInfo[5],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.cloakInfo[1],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.cloakInfo[2],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.cloakInfo[3],
        bonus: [this.itemService.enchantInfo[6]],
        quality: 'Good',
        bis: undefined
      }],
    robe: [
      {
        piece: this.itemService.chestInfo[1],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Best',
        bis: 'best recommended'
      },
      {
        piece: this.itemService.chestInfo[0],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.chestInfo[3],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: 'affordable'
      },
      {
        piece: this.itemService.chestInfo[5],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.chestInfo[2],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: undefined
      },
    ],
    wrist: [
      {
        piece: this.itemService.bracerInfo[3],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.bracerInfo[2],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.bracerInfo[0],
        bonus: [this.itemService.enchantInfo[4]],
        quality: 'Good',
        bis: 'affordable'
      },
    ],
    hands: [
      {
        piece: this.itemService.handInfo[2],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Best',
        bis: 'best recommended'
      },
      {
        piece: this.itemService.handInfo[1],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.handInfo[0],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: 'affordable'
      },
    ],
    waist: [
      {
        piece: this.itemService.waistInfo[2],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.waistInfo[3],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.waistInfo[0],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.waistInfo[1],
        bonus: [],
        quality: 'Good',
        bis: undefined
      }
    ],
    leggings: [
      {
        piece: this.itemService.leggingInfo[4],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.leggingInfo[3],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.leggingInfo[1],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: 'affordable'
      },
      {
        piece: this.itemService.leggingInfo[2],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.leggingInfo[0],
        bonus: [this.itemService.enchantInfo[1]],
        quality: 'Good',
        bis: undefined
      }
    ],
    feet: [
      {
        piece: this.itemService.feetInfo[0],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.feetInfo[1],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.feetInfo[2],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.feetInfo[3],
        bonus: [this.itemService.enchantInfo[3]],
        quality: 'Good',
        bis: undefined
      }
    ],
    rings: [
      {
        piece: this.itemService.ringInfo[4],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.ringInfo[3],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.ringInfo[6],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Great',
        bis: 'recommended affordable'
      },
      {
        piece: this.itemService.ringInfo[7],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.ringInfo[1],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.ringInfo[0],
        bonus: [this.itemService.enchantInfo[0]],
        quality: 'Good',
        bis: undefined
      }
    ],
    trinkets: [
      {
        piece: this.itemService.trinketInfo[1],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.trinketInfo[4],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.trinketInfo[2],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.trinketInfo[3],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
    ],
    one_hand: [
      {
        piece: this.itemService.oneHandInfo[4],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.oneHandInfo[0],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.oneHandInfo[1],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: 'recommended affordable'
      },
      {
        piece: this.itemService.oneHandInfo[2],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: undefined
      },
    ],
    offhand: [
      {
        piece: this.itemService.offHandInfo[0],
        bonus: [],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.offHandInfo[4],
        bonus: [],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.offHandInfo[3],
        bonus: [],
        quality: 'Good',
        bis: 'affordable'
      },
      {
        piece: this.itemService.offHandInfo[2],
        bonus: [],
        quality: 'Good',
        bis: undefined
      },
    ],
    two_hand: [
      {
        piece: this.itemService.twoHandInfo[0],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Best',
        bis: 'best'
      },
      {
        piece: this.itemService.twoHandInfo[2],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: 'recommended'
      },
      {
        piece: this.itemService.twoHandInfo[3],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Great',
        bis: 'affordable'
      },
      {
        piece: this.itemService.twoHandInfo[4],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Good',
        bis: undefined
      },
      {
        piece: this.itemService.twoHandInfo[5],
        bonus: [this.itemService.enchantInfo[5]],
        quality: 'Good',
        bis: undefined
      }
    ],
    wands: [
      {
        piece: this.itemService.wandInfo[2],
        bonus: [],
        quality: 'Best',
        bis: 'best recommended affordable'
      },
      {
        piece: this.itemService.wandInfo[0],
        bonus: [],
        quality: 'Great',
        bis: undefined
      },
      {
        piece: this.itemService.wandInfo[1],
        bonus: [],
        quality: 'Great',
        bis: undefined
      }
    ]
  }
}
