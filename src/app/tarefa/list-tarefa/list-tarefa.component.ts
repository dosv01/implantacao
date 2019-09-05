import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Observable } from 'rxjs';
import { TarefaDataService } from '../shared/tarefa-data.service';
import { Tarefa } from '../shared/tarefa';
import { Equipe } from 'src/app/equipe/shared/equipe';
import { EquipeService } from 'src/app/equipe/shared/equipe.service';

@Component({
  selector: 'app-list-tarefa',
  templateUrl: './list-tarefa.component.html',
  styleUrls: ['./list-tarefa.component.css']
})
export class ListTarefaComponent implements OnInit {
  tarefa: Tarefa
  equipe: Equipe;
  key: string = '';
  tarefas: Observable<any>;
  equipes: Observable<any>;

  constructor(private tarefaService: TarefaService, private tarefaDataService: TarefaDataService, private equipeService: EquipeService) { }

  ngOnInit() {
    this.tarefas = this.tarefaService.getAll();
    this.equipes = this.equipeService.getAll();
    
    //revisar rsrssr
    this.tarefa = new Tarefa();
    this.tarefa.equipe = new Equipe();

    this.tarefaDataService.currentTarefa.subscribe(data => {
      if (data.tarefa && data.key) {
        this.tarefa = new Tarefa();
        this.tarefa.descricao = data.tarefa.descricao;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.tarefaService.update(this.tarefa, this.key);
    } else {
      this.tarefaService.insert(this.tarefa);
    }

    this.tarefa = new Tarefa();
    this.tarefa.equipe = new Equipe();
    
    this.tarefas = this.tarefaService.getAll();
  }

  delete(key: string) {
    this.tarefaService.delete(key);
  }

  edit(tarefa: Tarefa, key: string) {
    // this.tarefaDataService.changeTarefa(tarefa, key);
    this.tarefaService.update(tarefa, key);
    this.tarefas = this.tarefaService.getAll();
  }

}
