import { Taskstatus } from "./Task";
import { TodoList } from "./TodoList";

const todo = new TodoList();
//adicionar tarefas
todo.addTask("Estudar TypeScript");
todo.addTask("Fazer compras");
todo.addTask("Praticar exercicios");


//atualizar uma tarefa
const updated = todo.updateTask(1, {status: Taskstatus.Completed});
console.log("Atualizou tarefa?", updated);


//filtar por id
const taskById = todo.filterTask("id", 1);
console.log("Trefa com ID 1:", taskById);

//filtrar tarefas pendentes
const pendingTasks = todo.filterTask("status", Taskstatus.Pending);
console.log("Tarefas Pendentes:", pendingTasks);


//filtrar tarefas concluidas
const completedTasks = todo.filterTask("status", Taskstatus.Completed);
console.log("Tarefas Concluidos:", completedTasks/*.map((c) => c.description)*/);


//remover tarefas
const removed = todo.removeTask(2);
console.log("Todas as Tarefas:", removed);


//Listar tarefas
console.log("Todas as tarefas", todo.listTasks());
