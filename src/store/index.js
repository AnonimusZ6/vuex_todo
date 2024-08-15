import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, index) {
      state.todos.splice(index, 1);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    deleteTodo({ commit }, index) {
      commit('DELETE_TODO', index);
    }
  },
  getters: {
    todos: (state) => state.todos,
  }
});

export default store;
