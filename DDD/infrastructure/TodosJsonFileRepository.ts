import {TodosRepository} from '../domain/Infrastructure/TodosRepository';
import {Todo} from '../domain/Business/Todo';
import * as data from '../../data/data.json';


export class TodosJsonFileRepository implements TodosRepository {
    todos: Todo[];

    constructor() {
    }

    add(todo: Todo): boolean {
        this.todos.push(todo);
        return true;
    }

    all(): Todo[] {
        this.todos = data.todos;
        return this.todos;
    }

    clear(): void {
        this.todos =[];
    }

    delete(what: string): boolean {
        const found = this.todos.findIndex( t=> t.what === what);
        this.todos = this.todos.filter( t => t.what === what);
        return found > 0;
    }

    find(what: string): Todo {
        return this.todos.find(t => t.what === what);
    }

    update(what: string, todo: Todo): boolean {
        const found = this.todos.findIndex( t => t.what === what);
        this.todos[found] = todo;
        return found > 0;
    }

}
