"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task_1 = require("./Task");
var TodoList_1 = require("./TodoList");
var todo = new TodoList_1.TodoList();
//adicionar tarefas
todo.addTask("Estudar TypeScript");
todo.addTask("Fazer compras");
todo.addTask("Praticar exercicios");
//atualizar uma tarefa
var updated = todo.updateTask(1, { status: Task_1.Taskstatus.Completed });
console.log("Atualizou tarefa?", updated);
//filtar por id
var taskById = todo.filterTask("id", 1);
console.log("Trefa com ID 1:", taskById);
//filtrar tarefas pendentes
var pendingTasks = todo.filterTask("status", Task_1.Taskstatus.Pending);
console.log("Tarefas Pendentes:", pendingTasks);
//filtrar tarefas concluidas
var completedTasks = todo.filterTask("status", Task_1.Taskstatus.Completed);
console.log("Tarefas Concluidos:", completedTasks /*.map((c) => c.description)*/);
//remover tarefas
var removed = todo.removeTask(2);
console.log("Todas as Tarefas:", removed);
//Listar tarefas
console.log("Todas as tarefas", todo.listTasks());
