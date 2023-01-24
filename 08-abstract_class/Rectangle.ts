import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theX: number, theY: number, private _width: number, private _length: number){
        super(theX, theY);
    }

    private getwidth(): number{
        return this._width;
    }

    public setwidth(value: number) {
        this._width = value
    }

    private getlength(): number{
        return this._length;
    }

    public setlength(value: number) {
        this._length = value
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}