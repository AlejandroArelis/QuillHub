import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xtable',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() displayedColumns: string[] = [];

  columnsToDisplay: any = [];
  originalData: any[] = [];
  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {
    this.originalData = [...this.data];
    this.columnsToDisplay = [ ...this.displayedColumns ];
  }

  onCheckboxChange(event: any, column: string) {
    if(event.checked) {
      this.columnsToDisplay.push(column);
    } else {
      this.columnsToDisplay = this.columnsToDisplay.filter((item:any) => item !== column);
    }
  }

  sortTable(column: string) {
    this.data = [...this.data].sort((a: any, b: any) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }

  applyFilter() {
    if (this.searchTerm.trim() === '') {
      // Si el término de búsqueda está vacío, restaura los datos originales.
      this.data = [...this.originalData];
    } else {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      this.data = this.originalData.filter((item: any) => {
        return (
          (item['Title'] && item['Title'].toLowerCase().includes(lowerCaseSearchTerm)) ||
          (item['Author'] && item['Author'].toLowerCase().includes(lowerCaseSearchTerm)) ||
          (item['Genre'] && item['Genre'].toLowerCase().includes(lowerCaseSearchTerm))
        );
      });
    }
  }
}
