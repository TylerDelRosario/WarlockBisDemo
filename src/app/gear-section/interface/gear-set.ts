import { ItemInfo } from "../../item/interface/item-info"
import { GearInfo } from "./gear-info"

export interface GearSet {
    head: GearInfo[],
    neck: GearInfo[],
    shoulder: GearInfo[],
    back: GearInfo[],
    robe: GearInfo[],
    wrist: GearInfo[],
    hands: GearInfo[],
    waist: GearInfo[],
    leggings: GearInfo[],
    feet: GearInfo[],
    rings: GearInfo[],
    trinkets: GearInfo[],
    one_hand: GearInfo[],
    offhand: GearInfo[],
    two_hand: GearInfo[],
    wands: GearInfo[]
}
