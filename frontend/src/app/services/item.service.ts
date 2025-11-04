import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = '/api/items';

  constructor(private http: HttpClient) {}

  // Get all items
  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add new item
  addItem(itemData: any): Observable<any> {
    return this.http.post(this.apiUrl, itemData);
  }

  // Delete item
  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

