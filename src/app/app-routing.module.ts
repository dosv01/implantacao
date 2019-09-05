import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListImplantacaoComponent } from './implantacao/list-implantacao/list-implantacao.component';
import { ReleaseComponent } from './release/release.component';
import { SobreComponent } from './sobre/sobre.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { ListTarefaComponent } from './tarefa/list-tarefa/list-tarefa.component';
import { NovaImplantacaoComponent } from './implantacao/nova-implantacao/nova-implantacao.component';
import { ImplantacaoComponent } from './implantacao/implantacao/implantacao.component';

const routes: Routes = [

    {
        path: 'implantacao/:id',
        component: ImplantacaoComponent
    },
    {
        path: 'lista-equipe',
        component: ListEquipeComponent
    },
    {
        path: 'release',
        component: ReleaseComponent
    },
    {
        path: 'lista-tarefa',
        component: ListTarefaComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'list-implantacao',
        component: ListImplantacaoComponent,
        pathMatch: 'full'
    },
    {
        path: 'nova-implantacao',
        component: NovaImplantacaoComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: ListImplantacaoComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/implantacao',
        pathMatch: 'full'
    }
    // { path: 'contact/:id', component: ContactDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}