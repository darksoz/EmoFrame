import { Injectable } from '@nestjs/common';
import { Api } from './api';

@Injectable()
export class ApiService {
    tasks: Api[] = [
        {id: 1, description: 'Tarefa 1', completed: false},
        {id: 2, description: 'Tarefa 2', completed: false},
        {id: 3, description: 'Tarefa 3', completed: true},
    ];

    getAll(){
        return this.tasks;
    }

    getById(id: number){
        const task = this.tasks.find((value)=> value.id == id);
        return task;
    }

    create(task: Api ){
        let lastId = 0;
        if(this.tasks.length > 0){
            lastId =  this.tasks[this.tasks.length - 1].id
            task.id = lastId + 1;
            this.tasks.push(task);
            return task;
        }
    }

    update(task: Api){
        const array = this.getById(task.id);
        if(array){
            array.description = task.description;
            array.completed = task.completed;
        }
        return array;
    }

    delete(id: number){
        const index = this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index,1);
    }

}
