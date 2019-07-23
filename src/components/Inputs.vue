<template>
    <div>
        <input v-model="msg" type="text" id="additem">
        <button class="btn" @click="add">Add</button>
    </div>
</template>

<script>
    export default {
        name: "Inputs",
        data(){
            return {
                msg:""
            }
        },
        methods:{
            add(){
                this.$store.dispatch("postItem",this.msg);
                this.msg='';
            }
        }
    }
</script>

<style scoped>

</style>
