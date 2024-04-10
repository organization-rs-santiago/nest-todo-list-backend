import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

import { uuid } from "uuidv4";

@Entity("todos")
export class Todo {
    @PrimaryColumn()
    id: string

    @Column()
    title: string;

    @Column()
    body: string;
    
    @Column()
    state: string;

    @Column()
    categoryId: number;

    @Column()
    createdAt: Date

    @BeforeInsert()
    generateId() {
        this.id = uuid()
    }
}
