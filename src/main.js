import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios, axios);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    items:[

    ],
    status: 0
  },
  mutations: {
      changeContent (state,id,name) {
        state.items[id].name=name;

      },
      changeStatus (state,status) {
        state.status=status;
      },
      changeEditFlag (state,id){
        state.items[id].editFlag=false;
      },
      enterClick (state,id){
        state.items[id].editFlag=true;
      },
      getList (state,items){
          //console.log(typeof(items));
          state.items.push(...items);
         // console.log(state.items);
      },
      addItem (state,items){
          //console.log(typeof(items));
          state.items.push(...items);
          // console.log(state.items);
      },
      updateItem(state,items){

      }
  },
    actions: {
        // 封装一个 ajax 方法
        getDatas ({commit}) {
            axios.get('http://localhost:3001/todos')
                .then((response)=>{
                    commit("getList",response.data);
                })
        },
        postItem ({commit},name) {
            axios.post('http://localhost:3001/todos',{
                "content": name,
                "completed": false
            }).then((response)=>{
                    commit("addItem",[response.data]);
            })
        },
        putItem ({commit},item) {
            axios.put(`http://localhost:3001/todos/${item.id}`,item
            ).then((response)=>{
                commit("updateItem",[response.data]);
            })
        },
        deleteItem ({commit},item) {
            axios.delete(`http://localhost:3001/todos/${item.id}`).then((response)=>{
                commit("updateItem",[response.data]);
            })
        }
    }
});

new Vue({
    render: h => h(App),
    store,
    axios,
    VueAxios,
}).$mount('#app')
