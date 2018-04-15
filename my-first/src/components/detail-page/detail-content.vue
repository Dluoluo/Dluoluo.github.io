<template>
    <div class="detail-content">
        <div class="content">
            <div class="left">
                <div class="img">
                    <img :src="imgSrc[$route.path]" alt="">
                </div>
                <ul>
                    <router-link tag="li" v-for="itme in list" :to="{path:itme.path}" active-class="active">
                        {{itme.title}}
                    </router-link>
                </ul>
            </div>
            <div class="right">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[
                    {
                        title:'数据统计',
                        path:'count',
                        active:true
                    },
                    {
                        title:'数据预测',
                        path:'forecast',
                        active:false
                    },
                    {
                        title:'流量分析',
                        path:'analysis',
                        active:false
                    },
                    {
                        title:'广告发布',
                        path:'publish',
                        active:false
                    }
                ],
                imgSrc:{
                    '/detail/count':require('../../assets/images/1.png'),
                    '/detail/forecast':require('../../assets/images/2.png'),
                    '/detail/analysis':require('../../assets/images/3.png'),
                    '/detail/publish':require('../../assets/images/4.png')
                }
            }
        }
    }
</script>

<style scoped>
.detail-content{
    background: #f0f2f5;
}
.content {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
}
.left{
    float: left;
    width: 202px;
    background: #ffffff;
}
.left .img{
    padding: 20px 0;
    text-align: center;
}
.left ul{
    padding-bottom: 20px;
}
.left ul li{
    display: block;
    height: 34px;
    line-height: 34px;
    text-indent: 14px;
    cursor: pointer;
}
.left ul li:hover{
    background: #4fc08d;
    color: #ffffff;
}
.left ul .active{
    background: #4fc08d;
    color: #ffffff;
}
.right{
    margin-left: 222px;
}
</style>