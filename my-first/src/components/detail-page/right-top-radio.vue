<template>
    <div class="right-top-radio" v-if="componentsIsShow">
        <input type="button" v-for="(itme,index) in DateArray" :value="itme" @click="Discoloration(index)" :class="{active:index===nowIndex}">
    </div>
</template>

<script>
    export default {
        props:{
            DateArray:Array,
            componentsIsShow:Boolean
        },
        data(){
            return{
                nowIndex:0
            }
        },
        methods:{
            Discoloration(index){
               this.nowIndex=index
            }
        }
    }
</script>

<style scoped>
.right-top-radio{
    display: inline-block;
    height: 100%;
}
.right-top-radio input{
    width: 60px;
    height: 27px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.right-top-radio .active{
    background: #4fc08d;
    color: #ffffff;
}
</style>