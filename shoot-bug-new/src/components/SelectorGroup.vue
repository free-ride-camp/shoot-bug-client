<template>
  <div id="container" ref="container">
    <div v-for="(name,index) in group" :key="index" class="item" 
    :class="{active:choosedItemIndex === index}" @click="choose(index)">
        {{name}}
    </div>
  </div>
</template>

<script>
export default {
    name:'SelectorGroup',
    data() {
        return {
            choosedItemIndex:this.active
        }
    },
    props:{
        //like ['a','b','c']
        group:Array,
        active: {
            type:Number,
            default: 0
        }
    },
    methods: {
        choose(index){
            this.choosedItemIndex = index
            this.$emit('handle',this.choosedItemIndex)
        }
    },
   
}
</script>

<style scoped>
#container{
    --m-radius:4px;
    --active-bg-color:rgb(41, 204, 41);
    display: inline-block;
    overflow: hidden;
}

.item{
    width: fit-content;
    height: 30px;
    padding: 0 5px;
    border: 1px solid black;
    border-right: 0;
    float: left;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
}

.item:hover{
    background-color: rgb(155, 233, 129);
}

.item:last-child{
    border-right: 1px solid black;
    border-top-right-radius: var(--m-radius);
    border-bottom-right-radius: var(--m-radius);
}

.item:first-child{
    border-top-left-radius: var(--m-radius);
    border-bottom-left-radius: var(--m-radius);
}

.active{
    background-color: var(--active-bg-color);
}

.active:hover{
    background-color: var(--active-bg-color);
}
</style>