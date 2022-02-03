import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Product } from '../models/product';
import { catchError, map } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL_RAIZ: string =  'http://localhost:8000/';

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(msg: string): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY
  }

  get listProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.URL_RAIZ}product/`).pipe(
      map(res => res),
      catchError(e => this.errorHandler(e))
    )
  }
}
