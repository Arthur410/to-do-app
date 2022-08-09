import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
// Create a new store instance.
export default createStore({
    state () {
        return {
            toDoItems: [{
                'title':'Удачи в достижении целей',
                'description': 'Не забывай давать себе отдых',
            }]
        }
    },
    mutations: {
        addToDoItem (state, val) {
            state.toDoItems.push(val)
        },
        deleteToDoItem(state, index) {
            state.toDoItems.splice(index, 1)
        }
    },
    plugins: [createPersistedState()]
})