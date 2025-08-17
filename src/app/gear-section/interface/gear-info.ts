import { ItemInfo } from "../../item/interface/item-info";

export interface GearInfo {
    piece: ItemInfo,
    bonus: ItemInfo[],
    quality: string,
    bis: string | undefined,
}
