import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books = [];
  model = new Book();
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.getAllBooks();
    this.books.length;
    // this.model.id=20;
  }
  getAllBooks() {
    this.bookService.getAllBookService().subscribe((data: any[]) => {
      this.books = data;
    });
  }
  addBook() {
    if (!this.model.id) {
      this.bookService.createBookService(this.model).subscribe((data) => {
        this.getAllBooks();
        this.model = new Book();
      });
    } else {
      this.bookService
        .updateBookService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllBooks();
          this.model = new Book();
        });
    }
  }

  editBook(id) {
    alert(id);
    this.bookService.getBookService(id).subscribe((data: any) => {
      this.model = data;
    });
  }

  deleteBook(id) {
    alert(id);
  }
  removeBook(id) {
    this.bookService.deleteBookService(id).subscribe((data) => {
      this.getAllBooks();
    });
  }
}
