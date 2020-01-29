import {Todo} from '../Business/Todo';

export interface TodosRepository {
    all(): Todo[];
    add(todo: Todo): boolean;
    find(what: string): Todo;
    update(what: string, todo: Todo): boolean;
    delete(what: string): boolean;
    clear(): void;
}
