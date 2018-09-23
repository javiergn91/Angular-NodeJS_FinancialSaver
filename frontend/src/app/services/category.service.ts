import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly URL_API = "http://localhost:3000/api/categories";

  constructor(private http:HttpClient) { }

  getCategories() {
    return this.http.get(this.URL_API);
  }

  addCategory(Category: Category) {
    return this.http.post(this.URL_API, Category);
  }
}
