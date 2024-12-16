import Product from "./API/Product";

/*import { Taskstatus } from "./Task";
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
console.log("Tarefas Concluidos:", completedTasks/*.map((c) => c.description));


//remover tarefas
//const removed = todo.removeTask(2);
//console.log("Todas as Tarefas:", removed);


//Listar tarefas
//console.log("Todas as tarefas", todo.listTasks());
*/

const  API_URL = 'https://fakestoreapi.com/products';

type ApiResponse<T> = T | {error: string }; // tipagem de resultado em caso de sucesso ou erro.

async function fetchProducts(): Promise<ApiResponse<Product[]>>{
    try{
        let response2 = undefined;
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error('Erro ao buscar produtos: ${response.status}');
        }
       

        const data = await response.json() as Product[];
        if(isValidProductArray(data)){
            return data;
        }else{
            throw new Error('Os dados recebidos não correspondem ao formato esperado');
        }

    } catch(error){
        return {error: (error as Error).message}
    }
    
}

var result = await fetchProducts();
console.log(result);




// função para verificar se um objeto é do tipo Product
function isProduct(obj: any): obj is Product {
    // console.log(obj.teste === 'string');
    return (
        typeof obj === 'object' && 
        obj !== null && 
        typeof obj.id === 'number' &&
        typeof obj.title === 'string' &&
        typeof obj.price === 'number' &&
        typeof obj.description === 'string' &&
        typeof obj.category === 'string' && 
        typeof obj.image === 'string' &&
        typeof obj.rating === 'object' &&
        typeof obj.rating.rate === 'number' &&
        typeof obj.rating.count === 'number');
}
// para verificar se um array de objetos são todos do tipo Product.
function isValidProductArray(data: any): data is Product[]{
    // console.log("teste", data);
    // console.log('teste', data.every(isProduct));
    return  Array.isArray(data) && data.every(isProduct);
}
