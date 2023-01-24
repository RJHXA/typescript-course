export class Shape {

    constructor(private _x: number, private _y: number) {
    }

    private getx(): number {
        return this._x;
    }

    public setx(value: number) {
        this._x = value
    }

    private gety(): number {
        return this._y;
    }

    public sety(value: number) {
        this._y = value
    }

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`
    }
}