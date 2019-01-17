<template>
<!-- eslint-disable -->
    <div class="row list">
        <ul v-if="seen" id="no-task">
            <li>
            <label class="no-task">
                <p>No tasks available</p>
            </label>
            </li>
        </ul>
        <ul class="collection">
            <li class="collection-item" v-for="todo in todos" :key="todo.id">
            <label>
                <input type="checkbox" :checked=todo.done @change="todo.done = !todo.done" class="teal"/>
                <span class="todo-title">{{todo.title}}</span>
                <span>
                <a class="delete-btn" @click.prevent="deleteTodo(todo)">
                    <img class="right" src="/img/delete.png">
                </a>
                </span>
            </label>
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        seen: Boolean,
        todos: Array,
        showNoList: Function,
    },
    methods: {
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
            let todos = {...this.todos};
            if(Object.keys(todos).length === 0){
                this.showNoList();
            }
        },
    }
};
</script>
