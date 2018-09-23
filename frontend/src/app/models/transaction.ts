import { Category } from "./category";
import { PaymentType } from "./paymentType";

export class Transaction {
    id: number;
    money_amount: number;
    comment: string;
    createdAt: string;
    category: Category;
    paymentType: PaymentType;

    constructor()
    {
        this.id = -1;
        this.money_amount = 0;
        this.comment = "";
        this.createdAt = "";
        this.category = new Category;
        this.paymentType = new PaymentType;
    }
}