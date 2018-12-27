import { Injectable, ApplicationRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private products = [];
  private header = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json;odata=verbose' }) };

  constructor(private http: HttpClient) { }

  grabAllProducts(): any[] {
    const url = 'https://sandbox.bamboosolutions.com/demos/Template/' +
      '/_api/web/lists/getbytitle(\'SandboxProducts\')/Items?$top eq 4999';

    this.http.get(url, this.header).subscribe(r => {
      this.products = r['d'].results;
      console.log(this.products);
    });

    return this.products;
  }
}
