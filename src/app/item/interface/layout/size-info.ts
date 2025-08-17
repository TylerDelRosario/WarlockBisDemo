export class SizeInfo {
    name: string;
    length: number;
    inset: number;
    bgOffset: number;
    offsetModifier: number;

    constructor(name: string, size: number, inset: number, offset: number, mod: number) {
        this.name = name;
        this.length = size;
        this.inset = inset;
        this.bgOffset = offset;
        this.offsetModifier = mod;
    }
}
