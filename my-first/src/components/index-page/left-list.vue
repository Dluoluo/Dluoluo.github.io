<template>
    <div>
        <h3>{{leftListDatas.title}}</h3>
        <ul :class="{hr:leftListDatas.hr}">
            <li v-for="itme in leftListDatas.list"><a :href="itme.url">{{itme.name}}</a><span v-if="itme.hot">HOT</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            leftListDatas:Object
        }
    }
</script>

<style scoped>
h3{
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    color: black;
    text-indent: 15px;
}
li{
    padding: 0 17px 10px;
}
.hr{
    border-bottom: 1px solid #dddddd;
}
span{
    background: red;
    margin-left: 5px;
    color: #ffffff;
    padding: 1px;
}
</style>