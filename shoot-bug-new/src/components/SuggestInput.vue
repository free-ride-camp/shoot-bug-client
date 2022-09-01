<template>
  <el-autocomplete
    v-model="content"
    :fetch-suggestions="querySearchAsync"
    :placeholder="placeHolder"
    :trigger-on-focus="false"
    @input="$emit('input',$event)"
  ></el-autocomplete>
</template>

<script>
export default {
    name:'SuggestInput',
    data() {
        return {
            content:''
        }
    },
    watch: {
        value(newVal){
            this.content = newVal
        }
    },
    methods: {
        
    },
    props:{
        placeHolder:{
            type:String,
            default:''
        },
        querySearchAsync:Function,
        value:{
            type:String,
            defalut:''
        }
    }
};
</script>

<style></style>
