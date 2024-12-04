import { Task, Taskstatus } from "./Task";

export class TodoList{
    private tasks: Task[] = [];
    private nextId: number = 1;


    //adicionar nova tarefa

    addTask(description:string): void{
        const newTask: Task ={
            id: this.nextId++,
            description,
            status: Taskstatus.Pending,

        };
        this.tasks.push(newTask);
    }


    //Listar todas as tarefas
    listTasks(): Task[]{
       return this.tasks;
    }

    //Atualiza uma tarefa pelo id.
    updateTask(id:number, updatefield: Partial<Omit<Task, "id">>):boolean{
        const taskIndex = this.tasks.findIndex((task) => task.id == id);
        if (taskIndex === -1) return false;
        // atualiza os campos permitidos, exceto o Id.
        this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...updatefield
        };
        return true;
    }

    //Remover uma tarefa pelo id.

    removeTask(id:number): boolean{
        const tamanhoinitial = this.tasks.length;
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this.tasks.length < tamanhoinitial;// returna true se um task foi removido, caso cantrario false.
    }


    filterTask<T extends keyof Task>(field: T, value: Task[T]): Task[]{
        return this.tasks.filter((task) => task[field] === value);
    }



}