export class PaymentType {
    id: number;
    name: string;

    constructor(id = -1, name = "") {
        this.id = id;
        this.name = name;
    }
}