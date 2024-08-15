<template>
    <div class="container">
        <div class="text-center">
            
                <h1>Список дел Vuex</h1>
            <div class="main-add-task">
                <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Добавить новое дело" />
                <button @click="addTodo" class="btn btn-primary">Добавить</button>
            </div>
      <!-- <ul>
        <li v-for="(todo, index) in todos" :key="index">
            <div class="task-wanted">
                {{ todo }}
                <button @click="deleteTodo(index)" class="btn btn-danger">Удалить</button>
            </div>
        </li>
      </ul> -->
      <div class="all-task-container">
        <div class="all-task-content" v-for="(todo, index) in todos" :key="index">
            <div class="task-wanted">
                {{ todo }}
                <button @click="deleteTodo(index)" class="btn btn-danger">Удалить</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    computed: {
      ...mapGetters(['todos'])
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.$store.dispatch('addTodo', this.newTodo);
          this.newTodo = '';
        }
      },
      deleteTodo(index) {
        this.$store.dispatch('deleteTodo', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .task-wanted {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
  }
  .task-wanted:first-child {
    font-size: 20px;
  }
  .main-add-task input{
    width: 250px;
    border-radius: 10px;
    border: 0.5px solid black;
    padding: 5px;
  }
  .main-add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .all-task-container {
    width: 500px;
    margin: auto;
    background-color: aliceblue;
    border-radius: 10px;
    margin-top: 50px;
  }
  </style>
  