import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    private getradius(): number{
        return this._radius;
    }

    public setradius(value: number) {
        this._radius = value
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`
    }
}