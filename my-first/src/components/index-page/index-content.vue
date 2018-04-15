
<template>
  <div class="index-content">
    <div class="content">
        <div class="left">
            <div class="product">
                <h2>全部产品</h2>
                <left-list v-for="(itme,index) in leftListData" :leftListDatas="itme"></left-list>
            </div>
            <div class="news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="itme in newsData"><a href="####">{{itme}}</a></li>
                </ul>
            </div>
        </div>
        <div class="right">
            <right-slider></right-slider>
            <right-list v-for="(itme,index) in rightListData" :rightListDatas="itme" :rightListIndex="index"></right-list>
        </div>
    </div>
  </div>
</template>

<script>
import leftList from "./left-list";
import rightSlider from "./right-slider";
import rightList from "./right-list";
export default {
  data() {
    return {
      leftTitleDate: ["全部产品", "最新消息"],
      newsData: [
        "新闻条目1新闻条目1新闻条目1新闻条目1",
        "新闻条目2新闻条目2新闻条目2新闻条目2",
        "新闻条目3新闻条目3新闻条目3新闻条目3",
        "新闻条目4新闻条目4新闻条目4新闻条目4"
      ],
      leftListData: {
        pc: {
          title: "pc产品",
          list: [
            {
              name: "数据统计",
              url: "####"
            },
            {
              name: "数据预测",
              url: "####"
            },
            {
              name: "流量分析",
              url: "####",
              hot: true
            },
            {
              name: "广告发布",
              url: "####"
            }
          ],
          hr: true
        },
        app: {
          title: "手机应用类",
          list: [
            {
              name: "91助手",
              url: "####"
            },
            {
              name: "产品助手",
              url: "####",
              hot: true
            },
            {
              name: "智能地图",
              url: "####"
            },
            {
              name: "团队语音",
              url: "####"
            }
          ],
          hr: false
        }
      },
      rightListData: [
        {
          imgSrc: require("../../assets/images/1.png"),
          title: "开放产品",
          description: "开放产品是一款开放产品",
          but: "立即购买",
          url:'/detail/count'

        },
        {
          imgSrc: require("../../assets/images/2.png"),
          title: "品牌营销",
          description: "品牌营销帮助你的产品更好地找到定位",
          but: "立即购买",
          url:'/detail/forecast'
        },
        {
          imgSrc: require("../../assets/images/3.png"),
          title: "使命必达",
          description: "使命必达快速迭代永远保持最前端的速度",
          but: "立即购买",
          url:'/detail/analysis'
        },
        {
          imgSrc: require("../../assets/images/4.png"),
          title: "勇攀高峰",
          description: "帮你勇闯高峰，到达事业的顶峰",
          but: "立即购买",
          url:'/detail/publish'
        }
      ]
    };
  },
  components: {
    leftList,
    rightSlider,
    rightList
  }
};
</script>

<style scoped>
.index-content {
  background: #f0f2f5;
}
.content {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.left {
  float: left;
}
.left .product,
.left .news {
  width: 270px;
  background: #ffffff;
  margin-top: 15px;
}
.left h2 {
  height: 35px;
  line-height: 35px;
  text-indent: 15px;
  background: #4fc08d;
  color: #ffffff;
}
.news ul {
  padding-top: 30px;
}
.news li {
  padding: 0 17px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right {
  margin-left: 285px;
}
</style>