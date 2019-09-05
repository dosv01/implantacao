import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../shared/equipe.service';
import { Observable } from 'rxjs';
import { EquipeDataService } from '../shared/equipe-data.service';
import { Equipe } from '../shared/equipe';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  equipe: Equipe
  key: string = '';
  equipes: Observable<any>;

  constructor(private equipeService: EquipeService, private equipeDataService: EquipeDataService) { }

  ngOnInit() {
    this.equipes = this.equipeService.getAll();
    this.equipe = new Equipe();
    this.equipeDataService.currentEquipe.subscribe(data => {
      if (data.equipe && data.key) {
        this.equipe = new Equipe();
        this.equipe.descricao = data.equipe.descricao;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.equipeService.update(this.equipe, this.key);
    } else {
      this.equipeService.insert(this.equipe);
    }

    this.equipe = new Equipe();
    this.equipes = this.equipeService.getAll();
  }

  delete(key: string) {
    this.equipeService.delete(key);
  }

  edit(equipe: Equipe, key: string) {
    // this.equipeDataService.changeEquipe(equipe, key);
    this.equipeService.update(equipe, key);
    this.equipes = this.equipeService.getAll();
  }

}
