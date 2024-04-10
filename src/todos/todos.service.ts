import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>
  ){}

  create(dto: CreateTodoDto) {
    const todo = this.repository.create(dto);
    return this.repository.save(todo);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateTodoDto) {
    const todo = await this.repository.findOneBy({ id });
    if (!todo) return null
    this.repository.merge(todo, dto);
    return this.repository.save(todo);
  }

  async remove(id: string) {
    const todo = await this.repository.findOneBy({ id });
    if (!todo) return null
    return this.repository.remove(todo);
  }
}
