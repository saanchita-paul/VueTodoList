const app = new Vue({
    el:'#app',
    data:{
    title: 'Happy Coding',
    newtodo:'',
    todos:[],
    },
    methods:{
        addTodo(){
            this.todos.push({
                title: this.newtodo,
                done:false
            });
            this.newtodo='';
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex,1);
        },
        allDone(){
            this.todos.forEach(todo => {
                todo.done = true;
            });
        }
    }
});