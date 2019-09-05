import { Tarefa } from 'src/app/tarefa/shared/tarefa';

export class Implantacao {
    squad: string = '';
    sm: string = '';
    dataImplantacao: string;
    tarefas: Tarefa[];
    status: boolean;
}