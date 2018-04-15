<template>
    <div class="right-bottom">
        <!-- 产品说明标题 -->
        <h2 class="h2">
            {{rightBottomData.h2}}
        </h2>
        <!-- 产品说明内容 -->
        <p class="p" v-if="rightBottomData.p">
            {{rightBottomData.p}}
        </p>
        <!-- 表格 -->
        <div class="table" v-if="rightBottomData.table">
            <right-bottom-table :tableData="rightBottomData.table"></right-bottom-table>
        </div>
        <!-- 用户行为指标 -->
        <div class="Indicators" v-if="rightBottomData.Indicators">
            <h1>{{rightBottomData.Indicators.h1}}</h1>
            <ul>
                <li v-for="itme in rightBottomData.Indicators.li">{{itme}}</li>
            </ul>
        </div>
        <!-- 浏览网站方式 -->
        <div class="mode" v-if="rightBottomData.mode">
            <h1>{{rightBottomData.mode.h1}}</h1>
            <ul>
                <li v-for="itme in rightBottomData.mode.li">{{itme}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import rightBottomTable from "./right-bottom-table";
export default {
  props: {
    rightBottomData: Object
  },
  components: {
    rightBottomTable
  }
};
</script>

<style scoped>
.right-bottom {
  background: #ffffff;
  margin: 20px 0 30px 0;
  padding: 0 20px 15px;
}
.right-bottom .h2 {
  height: 45px;
  line-height: 45px;
  font-size: 20px;
}
.right-bottom .p {
  line-height: 1.4rem;
  font-size: 14px;
}
.right-bottom h1 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.right-bottom li{
    padding: 5px 0;
}
</style>
