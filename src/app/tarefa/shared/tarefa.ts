import { Equipe } from 'src/app/equipe/shared/equipe';

export class Tarefa {
    descricao: string;
    equipe: Equipe;
    dias: number;
    dataExecucao?: string;
    status?: boolean
}