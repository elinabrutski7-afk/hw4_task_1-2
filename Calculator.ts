export class Calculator {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    addition (num1: number, num2: number): number {
        return this.num1 + this.num2;
    }

    isGreater (num1: number, num2: number): boolean {
        return this.num1 > this.num2;
    }
}
