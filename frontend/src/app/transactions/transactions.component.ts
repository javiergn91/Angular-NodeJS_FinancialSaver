import { Component, OnInit } from '@angular/core';
import { Transaction } from "../models/transaction";
import { Category } from "../models/category";
import { TransactionService } from 'src/app/services/transaction.service';
import { CategoryService } from "../services/category.service";
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  category: Category;

  constructor(private transactionService: TransactionService, private categoryService: CategoryService) {
    this.category = new Category;
  }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(result => {
      this.transactions = result as Transaction[];
    });
  }  

  deleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction.id).subscribe(result => {
      this.getTransactions();
    });
  }

  addCategory(form: NgForm) {
    this.categoryService.addCategory(this.category).subscribe(result => {
      console.log("add");
    });
  }
}
