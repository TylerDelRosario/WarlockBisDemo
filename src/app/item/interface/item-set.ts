import { ItemSetBonus } from "./item-set-bonus";

export interface ItemSet {
    name: string,
    setPieces: string[],
    setBonuses: ItemSetBonus[]
}
