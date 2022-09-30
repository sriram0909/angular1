import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  public getAllBookService() {
    return this.httpClient.get('http://localhost:8080/taxpage/');
  }
  public getBookService(id) {
    return this.httpClient.get('http://localhost:8080/taxpage/' + id);
  }
  public createBookService(book) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/taxpage/',
      JSON.stringify(book),
      {
        headers: headers,
      }
    );
  }
  public updateBookService(id, book) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/taxpage/' + id,
      JSON.stringify(book),
      {
        headers: headers,
      }
    );
  }
  public deleteBookService(id) {
    return this.httpClient.delete('http://localhost:8080/taxpage/' + id);
  }
}
