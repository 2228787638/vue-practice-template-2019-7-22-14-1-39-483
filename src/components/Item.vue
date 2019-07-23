<template>
    <div>

        <div v-for="(item,index) in items" :key="item.id">
            <div class="itemstyle">
                {{index+1}}.
                <input type="checkbox" v-model="item.completed" @change="checkBoxChange(item.id)"/>
                <label v-bind:class="{changeCheckbox:item.completed}" v-on:dblclick="changeContent(item.id,item.content)">
                    <span v-if="!editFlag&&itemId===item.id"><input v-model="item.content" type="text" @keyup.enter="enterClick(item.id)"></span>
                    <span v-else>{{item.content}}</span>
                </label>
                <button @click="deleteItem(item.id)">delete</button>
            </div>
        </div>
        <ul class="footer">
            <li @click="change(0)" :class="{active:categoryIndex==0}">All</li>&nbsp;&nbsp;
            <li @click="change(1)" :class="{active:categoryIndex==1}">Active</li>&nbsp;&nbsp;
            <li @click="change(2)" :class="{active:categoryIndex==2}">Complete</li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable vue/no-shared-component-data,no-unused-vars,no-console,no-undef */
    export default {
        name: "Item",
        template:'<div>hello world</div>',
        data(){
            return {
                itemId:1,
                editFlag:true,
                items:this.$store.state.items,
                status:this.$store.state.status,
                categoryIndex: 0
            }
        },
        methods: {
            checkBoxChange(id){
                this.$store.dispatch('putItem',this.items[id-1]);
            },
            change(flag) {
                switch (flag) {
                    case 0:this.items=this.$store.state.items;break;
                    case 1:this.items=this.$store.state.items.filter(i=>{return !i.completed});break;
                    case 2:this.items=this.$store.state.items.filter(i=>{return i.completed});break;
                }
                this.$store.commit('changeStatus',flag);
                this.status=flag;
                this.categoryIndex = flag;
                this.id=1;
            },
            changeContent(id,name){
                this.itemId=id;
                this.editFlag=false;
            },
            enterClick(id){
                this.$store.dispatch('putItem',this.items[id-1]);
                this.editFlag=true;
                this.$store.commit('enterClick',id-1);
                this.items[id-1].editFlag=true;
            },
            deleteItem(id){
                this.$store.dispatch('deleteItem',this.items[id-1]);
                this.items=this.items.splice(id-1,id-1);
            }
        },
        mounted () {
            // eslint-disable-next-line no-undef
            this.$store.dispatch('getDatas');
        }
    }

</script>

<style scoped>
    @import '../common.css';

</style>
