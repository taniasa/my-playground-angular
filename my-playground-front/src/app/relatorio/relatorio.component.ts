import { RelatorioService } from './relatorio.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Relatorio } from './relatorio.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'my-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'nomeArquivo', 'descricao'];
  dataSource: MatTableDataSource<Relatorio>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: RelatorioService) {

    const relatorioObservable = this.service.relatorios();
    this.dataSource = new MatTableDataSource();
    relatorioObservable.subscribe(data => {
      console.log(data)
      this.dataSource.data = data});

   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
