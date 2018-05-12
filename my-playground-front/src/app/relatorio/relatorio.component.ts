import { RelatorioFormComponent } from './relatorio-form/relatorio-form.component';
import { RelatorioService } from './relatorio.service';
import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Relatorio } from './relatorio.model';
import {MatPaginator, MatSort, MatTableDataSource, MatTabGroup} from '@angular/material';

@Component({
  selector: 'my-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'nomeArquivo', 'descricao', 'acoes'];
  dataSource: MatTableDataSource<Relatorio>;
  dado: Relatorio;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // @Input() meuForm: RelatorioFormComponent;
  @Output() labelTab = 'Incluir'
  @Output() tabAplicacao = 0
  @Output() remove = new EventEmitter<{Relatorio, RelatorioFormComponent}>()
  @Output() edit = new EventEmitter<{Relatorio, RelatorioFormComponent}>()
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

  emitRemove(item: Relatorio, meuForm: RelatorioFormComponent) {
    console.log(item)
    this.remove.emit(item)
  }

  emitEdit(item: Relatorio, meuForm: RelatorioFormComponent) {
    this.labelTab = 'Alterar'
    this.tabAplicacao = 1
    this.dado = item
    meuForm.modificando = true;
    this.edit.emit(item)
  }
}
