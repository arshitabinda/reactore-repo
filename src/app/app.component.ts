import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 6';
  displayedColumns: Array<string>;
  dataSource: MatTableDataSource<Element> = new MatTableDataSource<Element>();

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ["name", "weight", "symbol"]
    this.dataSource.data = [
      { name: 'Helium', weight: 4, symbol: 'He' },
      { name: 'Carbon', weight: 12, symbol: 'C' },
      { name: 'Phosphorus', weight: 30, symbol: 'K' },
      { name: 'Sulphur', weight: 32, symbol: 'S' }];
  }
}

class Element {
  name: string
  weight: number
  symbol: string
}