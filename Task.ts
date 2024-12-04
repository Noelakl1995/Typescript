export interface Task{
    id: number;
    description: string;
    status: Taskstatus;
}

export enum Taskstatus  {
    Pending = 'Pendente',
    Completed = 'Concluida'
}

