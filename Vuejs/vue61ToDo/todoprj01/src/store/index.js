import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoItems : [
            { id: 1, todo: "영화보기", done: false },
            { id: 2, todo: "주말 산책", done: true },
            { id: 3, todo: "ES6 학습", done: false },
            { id: 4, todo: "잠실 야구장", done: false }
        ]
    },
    mutations: {
        addTodo: function(state, param){
            state.todoItems = state.todoItems + param;
        },

    },
    actions: {
        addTodo : function( mutations , param ){
            mutations.commit("addTodo", param );
        },
        doneToggle : function( mutations, param ){
            mutations.commit("doneToggle", param );
        },
        removeTodo : function( mutations, param ){
            mutations.commit("removeTodo", param );
        },
        clearAll : function( mutations){
            mutations.commit("clearAll" );
        },

    },
    getters : {
        todoItems : function (state) {
            return state.todoItems;
        }

    }
});
