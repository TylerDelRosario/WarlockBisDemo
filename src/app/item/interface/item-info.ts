import { ItemBinding } from "./properties/binding";
import { ItemSet } from "./item-set";
import { Quality } from "./properties/quality";
import { Slot } from "./properties/slot";
import { StatObject } from "./stat/stat-object";
import { ItemType } from "./properties/type";
import { Reputation } from "./properties/reputation";
import { PlayerClass } from "./properties/player-class";
import { Recipe } from "./properties/recipe";
import { Damage } from "./properties/damage";

export interface ItemInfo {
    name: string | undefined,
    quality: Quality | undefined,
    binding: ItemBinding | undefined,
    unique: boolean | undefined,
    slot: Slot | undefined,
    type: ItemType | undefined,
    damage: Damage | undefined,
    stats: StatObject[],
    bonuses: string[],
    durability: number | undefined,
    armor: number | undefined,
    icon: string | undefined,
    location: string | undefined,
    quest: string | undefined,
    boss: string | undefined,
    droprate: number | undefined,
    lore: string | undefined,
    levelRequirement: number | undefined,
    itemSet: ItemSet | undefined,
    reputation: Reputation | undefined,
    classLock: PlayerClass[] | undefined,
    recipe: Recipe | undefined,
}
