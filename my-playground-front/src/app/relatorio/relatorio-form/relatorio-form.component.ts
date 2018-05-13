import { RelatorioComponent } from './../relatorio.component';
import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RelatorioService } from '../relatorio.service';
import { Relatorio } from '../relatorio.model';
@Component({
  selector: 'my-relatorio-form',
  templateUrl: './relatorio-form.component.html',
  styleUrls: ['./relatorio-form.component.css']
})
export class RelatorioFormComponent implements OnChanges {
  @Input() dado: Relatorio;
  @Output() revert = new EventEmitter();
  @Input() modificando: boolean = false
  @Input() relatorioMain: RelatorioComponent
  localForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: RelatorioService
  ) {
    this.createForm();
  }

  ngOnChanges() {
    this.rebuildForm();
  }
  rebuildForm() {
    console.log('rebuildForm')
    if (this.dado !== undefined) {
    console.log('rebuildForm2')

      this.localForm.reset({
        id: this.dado.id,
        nome: this.dado.nome,
        descricao: this.dado.descricao,
        nomeArquivo: this.dado.nomeArquivo
      });
    }
  }
  createForm() {
    this.localForm = this.fb.group({
      nome: '',
      descricao: '',
      nomeArquivo: ''
    });
  }

  emitRevert() {
    // this.rebuildForm();
    this.localForm.reset()
    this.modificando = false;
    this.relatorioMain.selectIndexTab(0)
    this.relatorioMain.setDefaultTab()
    this.revert.emit();
  }

  onSubmit() {
    // this.hero = this.prepareSaveHero();
    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.rebuildForm();
  }
}
