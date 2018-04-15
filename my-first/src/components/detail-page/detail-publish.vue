<template>
    <div class="publish-forecast">
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
                    h2:'广告发布',
                    p:'广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。',
                    quantity:{
                        name:'购买数量：'
                    },
                    industry:{
                        name:'行业：',
                        Array:['出版业','媒　体','金　融','互联网','游　戏'],
                        select:true
                    },
                    version:{
                        name:'产品版本：',
                        Array:['初级版','中级版','高级版','专家版']
                    },
                    timeString:{
                        name:'有效时间：',
                        time:'半年'
                    },
                    TotalPrice:{
                        name:'总价：',
                        Price:'500'
                    }
                },
                rightBottomData:{
                    h2:'产品说明',
                    p:'广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。',
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