<template>
    <div>
        <right-top :tightTopData="tightTopData"></right-top>
        <right-bottom :rightBottomData="rightBottomData"></right-bottom>
    </div>
</template>

<script>
import rightTop from './right-top'
import rightBottom from './right-bottom'
    export default {
        components:{
            rightTop,
            rightBottom
        },
        data(){
            return{
                tightTopData:{
                    h2:'数据统计',
                    p:'历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。',
                    type:{
                        name:'产品类型：',
                        Array:['红色版','绿色版','紫色版'],
                        radio:true
                    },
                    area:{
                        name:'适用地区：',
                        Array:['北京','上海','广州','天津','武汉','重庆'],
                        select:true
                    },
                    timeString:{
                        name:'有效时间：',
                        time:'半年'
                    },
                    TotalPrice:{
                        name:'总价：',
                        Price:500
                    }
                },
                rightBottomData:{
                    h2:'产品说明',
                    p:'历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。',
                    table:{
                        tr1:['安全安保','办公文教','彩票','车辆物流','成人用品','出版传媒','电脑硬件'],
                        tr2:['电子电工','房地产建筑装修','分类平台','服装鞋帽','箱包饰品','化工原料制品','机械设备'],
                        tr3:['家庭日用品','家用电器','教育培训','节能环保','金融服务','礼品','旅游住宿'],
                        tr4:['美容化妆','母婴护理','农林牧渔','软件','商务服务','生活服务','食品保健品'],
                        tr5:['手机数码','通讯服务设备','网络服务','医疗服务','游戏','运动休闲娱乐','招商加盟']
                    }
                 }
            }
        }
    }
</script>

<style scoped>

</style>