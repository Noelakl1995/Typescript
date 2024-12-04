"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
var Task_1 = require("./Task");
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
        this.nextId = 1;
    }
    //adicionar nova tarefa
    TodoList.prototype.addTask = function (description) {
        var newTask = {
            id: this.nextId++,
            description: description,
            status: Task_1.Taskstatus.Pending,
        };
        this.tasks.push(newTask);
    };
    //Listar todas as tarefas
    TodoList.prototype.listTasks = function () {
        return this.tasks;
    };
    //Atualiza uma tarefa pelo id.
    TodoList.prototype.updateTask = function (id, updatefield) {
        var taskIndex = this.tasks.findIndex(function (task) { return task.id == id; });
        if (taskIndex === -1)
            return false;
        // atualiza os campos permitidos, exceto o Id.
        this.tasks[taskIndex] = __assign(__assign({}, this.tasks[taskIndex]), updatefield);
        return true;
    };
    //Remover uma tarefa pelo id.
    TodoList.prototype.removeTask = function (id) {
        var tamanhoinitial = this.tasks.length;
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        return this.tasks.length < tamanhoinitial; // returna true se um task foi removido, caso cantrario false.
    };
    TodoList.prototype.filterTask = function (field, value) {
        return this.tasks.filter(function (task) { return task[field] === value; });
    };
    return TodoList;
}());
exports.TodoList = TodoList;
