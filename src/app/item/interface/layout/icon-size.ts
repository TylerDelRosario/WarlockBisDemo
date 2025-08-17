import { SizeInfo } from "./size-info";

export class IconSize {
    static readonly SMALL = new SizeInfo('small', 21, 21, 4, 4);
    static readonly MEDIUM = new SizeInfo('medium', 42, 42, 7, 7);
    static readonly LARGE = new SizeInfo('large', 68, 68, 10, 10);

    private constructor() {}
}
