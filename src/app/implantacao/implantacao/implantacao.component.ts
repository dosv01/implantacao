import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImplantacaoDataService } from '../shared/implantacao-data.service';
import { ImplantacaoService } from '../shared/implantacao.service';
import { Observable } from 'rxjs';
import { Implantacao } from '../shared/implantacao';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-implantacao',
  templateUrl: './implantacao.component.html',
  styleUrls: ['./implantacao.component.css']
})
export class ImplantacaoComponent implements OnInit {

  key: any;
  implantacao: any;

  constructor(
    private implantacaoService: ImplantacaoService,
    private implantacaoDataService: ImplantacaoDataService,
    private route: ActivatedRoute,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.implantacao = new Implantacao();
    this.route.params.subscribe(params => {
      this.key = params.id;
      this.implantacaoService.getById(params.id).subscribe(implantacao => {
        this.implantacao = implantacao;
      });
    });
  }

  isChangeStatus(event, i: any) {
    this.implantacao.tarefas[i].status = event;
    this.implantacaoService.update(this.implantacao, this.key);
  }

  retornaStatusLinha(dataExecucao: Date, status: boolean) {
    // [ngClass]="{'table-primary':datePipe.transform(tarefa.dataExecucao, 'dd/MM/yyyy') == this.datePipe.transform(this.current_date, 'dd/MM/yyyy')}>
    let dataAtual = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    if (dataExecucao.toString() == dataAtual) {
      return 'table-primary';
    } else if (dataExecucao.toString() < dataAtual && !status) {
      return 'table-danger';
    }
  }

}
