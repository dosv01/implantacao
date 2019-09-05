import { Component, OnInit } from '@angular/core';
import { Implantacao } from '../shared/implantacao';
import { Tarefa } from '../../tarefa/shared/tarefa';
import { ImplantacaoService } from '../shared/implantacao.service';
import { ImplantacaoDataService } from '../shared/implantacao-data.service';
import { TarefaService } from 'src/app/tarefa/shared/tarefa.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nova-implantacao',
  templateUrl: './nova-implantacao.component.html',
  styleUrls: ['./nova-implantacao.component.css']
})
export class NovaImplantacaoComponent implements OnInit {
  implantacao: Implantacao;
  tarefas: Observable<any>;
  key: string = '';

  constructor(
    private implantacaoService: ImplantacaoService,
    private tarefaService: TarefaService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.implantacao = new Implantacao();
    this.implantacao.tarefas = [];
  }

  onSubmit() {
    if (this.key) {
      this.implantacaoService.update(this.implantacao, this.key);
    } else {
      this.tarefas = this.tarefaService.getAll();
      let tarefasOriginal = [];
      this.tarefas.subscribe(data => {
        data.forEach(dataTarefa => {
          let tarefaOriginal = new Tarefa();
          tarefaOriginal.descricao = dataTarefa.descricao;
          tarefaOriginal.dias = dataTarefa.dias;
          tarefaOriginal.equipe = dataTarefa.equipe;

          let dtExe = new Date(this.datePipe.transform(this.implantacao.dataImplantacao, 'shortDate'));
          dtExe.setDate(dtExe.getDate() - parseInt(dataTarefa.dias));
          tarefaOriginal.dataExecucao = this.datePipe.transform(dtExe, 'yyyy-MM-dd');
          tarefaOriginal.status = false;
          tarefasOriginal.push(tarefaOriginal);
        });
        this.implantacao.tarefas = tarefasOriginal;
        console.log(this.implantacao)
        this.implantacaoService.insert(this.implantacao);
        this.implantacao = new Implantacao();
      })
    }
  }

}
