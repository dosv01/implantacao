import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Implantacao } from 'src/app/implantacao/shared/implantacao';
import { ImplantacaoService } from 'src/app/implantacao/shared/implantacao.service';
import { ImplantacaoDataService } from 'src/app/implantacao/shared/implantacao-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-implantacao',
  templateUrl: './list-implantacao.component.html',
  styleUrls: ['./list-implantacao.component.css']
})
export class ListImplantacaoComponent implements OnInit {
  implantacao: Implantacao;
  key: string = '';
  implantacoes: Observable<any>;

  constructor(
    private implantacaoService: ImplantacaoService,
    private implantacaoDataService: ImplantacaoDataService,
    private router: Router) { }

  ngOnInit() {
    this.implantacoes = this.implantacaoService.getAll();

    //revisar² rsrssr
    this.implantacao = new Implantacao();

    this.implantacaoDataService.currentImplantacao.subscribe(data => {
      if (data.implantacao && data.key) {
        this.implantacao = new Implantacao();
        this.implantacao.squad = data.implantacao.squad;
        this.implantacao.sm = data.implantacao.sm;
        this.implantacao.dataImplantacao = data.implantacao.dataImplantacao;
        this.implantacao.tarefas = data.implantacao.tarefas;
        this.implantacao.status = data.implantacao.status;
        this.key = data.key;
      }
    })
  }

  getById(key: string) {
    this.router.navigate(['implantacao', key]);
  }

}
