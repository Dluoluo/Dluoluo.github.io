<template>
    <div class="right-top-check">
        <input type="button" v-for="(itme,index) in DateArray" :value="itme" @click="active(index)" :class="{active:isActive[index]}">
    </div>
</template>

<script>
    export default {
        props:{
            DateArray:Array
        },
        data(){
            return{
                isActive:[false,false,false,false]
            }
        },
        methods:{
            active(index){
                this.$set(this.isActive,index,!this.isActive[index])
            }
        }
    }
</script>

<style scoped>
.right-top-check{
    display: inline-block;
    height: 100%;
}
.right-top-check input{
    height: 27px;
    padding: 0 10px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.right-top-check .active{
    background: #4fc08d;
    color: #ffffff;
}
</style>