import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'implantacao';
  private _jsonURL = 'assets/tarefas.json';
  tarefas: any = [];

  ngOnInit() {
  }

  constructor(private http: HttpClient) {
    this.listaTarefas();
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public listaTarefas() {
    this.getJSON().subscribe(data => {
      this.tarefas = data.tarefas;
      console.log(data);
    });
  }

}
