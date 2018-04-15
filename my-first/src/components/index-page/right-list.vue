
<template>
    <div class="right-list" :class="{'right-margin':rightListIndex%2==0}">
        <div class="img">
            <img :src="rightListDatas.imgSrc">
        </div>
        <div class="right">
            <h2>{{rightListDatas.title}}</h2>
            <p>{{rightListDatas.description}}</p>
            <router-link tag="span" :to="rightListDatas.url">{{rightListDatas.but}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            rightListDatas:Object,
            rightListIndex:Number
        }
    }
</script>

<style scoped>
.right-list{
    width: 447.5px;
    height: 165px;
    box-sizing: border-box;
    background: #ffffff;
    float: left;
    margin-bottom: 20px;
}
.img{
    float: left;
    width: 140px;
    height: 165px;
    line-height: 165px;
    text-align: center;  
}
.img img{
    vertical-align: middle;
}
.right h2{
    height: 50px;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}
.right p{
    height: 35px;
    line-height: 35px;
    margin-bottom: 10px;
}
.right span{
    display: inline-block;
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #4fc08d;
    color: #ffffff;
    cursor: pointer;
}
.right-margin{
    margin-right: 20px;
}
</style>