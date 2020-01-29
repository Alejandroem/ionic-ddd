import {Todo} from '../domain/Business/Todo';
import {TodosRepository} from '../domain/Infrastructure/TodosRepository';
import {GetAllTodos} from '../domain/Application/GetAllTodos';
import {TodosJsonFileRepository} from '../infrastructure/TodosJsonFileRepository';

export class GetAllTodosFromJson implements GetAllTodos {

    private todosRepository: TodosRepository;

    constructor() {
        this.todosRepository = new TodosJsonFileRepository();
    }

    getAllTodos(): Todo[] {
        return this.todosRepository.all();
    }
}

