import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { ListImplantacaoComponent } from './implantacao/list-implantacao/list-implantacao.component';
import { ReleaseComponent } from './release/release.component';
import { SobreComponent } from './sobre/sobre.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { ListTarefaComponent } from './tarefa/list-tarefa/list-tarefa.component';

import { FormsModule } from '@angular/forms';
import { NovaImplantacaoComponent } from './implantacao/nova-implantacao/nova-implantacao.component';
import { DatePipe } from '@angular/common';
import { ImplantacaoComponent } from './implantacao/implantacao/implantacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListImplantacaoComponent,
    ReleaseComponent,
    SobreComponent,
    ListEquipeComponent,
    ListTarefaComponent,
    NovaImplantacaoComponent,
    ImplantacaoComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClient, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
