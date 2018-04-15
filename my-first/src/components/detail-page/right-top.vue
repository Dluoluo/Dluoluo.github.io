<template>
    <div class="right-top">
        <h2 v-if="tightTopData.h2">{{tightTopData.h2}}</h2>
        <p v-if="tightTopData.p">{{tightTopData.p}}</p>
        <!-- 购买数量 -->
        <div class="quantity" v-if="tightTopData.quantity">
            <span>{{tightTopData.quantity.name}}</span>
            <right-top-quantity @calculation="calculation"></right-top-quantity>
        </div>
        <!-- 产品类型 -->
        <div class="type" v-if="tightTopData.type">
            <span>{{tightTopData.type.name}}</span>
            <right-top-radio :DateArray="tightTopData.type.Array" :componentsIsShow="tightTopData.type.radio"></right-top-radio>
            <right-top-select :DateArray="tightTopData.type.Array" :componentsIsShow="tightTopData.type.select"></right-top-select>
        </div>
        <!-- 媒介 -->
        <div class="medium" v-if="tightTopData.medium">
            <span>{{tightTopData.medium.name}}</span>
            <right-top-check :DateArray="tightTopData.medium.Array"></right-top-check>
        </div>
        <!-- 地区 -->
        <div class="area" v-if="tightTopData.area">
            <span>{{tightTopData.area.name}}</span>
            <right-top-select :DateArray="tightTopData.area.Array" :componentsIsShow="tightTopData.area.select"></right-top-select>
        </div>
        <!-- 行业 -->
        <div class="industry" v-if="tightTopData.industry">
            <span>{{tightTopData.industry.name}}</span>
            <right-top-select :DateArray="tightTopData.industry.Array" :componentsIsShow="tightTopData.industry.select"></right-top-select>
        </div>
        <!-- 有效时间arry -->
        <div class="timeArray" v-if="tightTopData.timeArray">
            <span>{{tightTopData.timeArray.name}}</span>
            <right-top-radio :DateArray="tightTopData.timeArray.Array" :componentsIsShow="tightTopData.timeArray.radio"></right-top-radio>
        </div>
        <!-- 版本 -->
        <div class="version" v-if="tightTopData.version">
            <span>{{tightTopData.version.name}}</span>
            <right-top-check :DateArray="tightTopData.version.Array"></right-top-check>
        </div>
        <!-- 有效时间string -->
        <div class="timeString" v-if="tightTopData.timeString">
            <span>{{tightTopData.timeString.name}}</span>
            {{tightTopData.timeString.time}}
        </div>
        <!-- 总价 -->
        <div class="TotalPrice" v-if="tightTopData.TotalPrice">
            <span>{{tightTopData.TotalPrice.name}}</span>
            {{TotalPrice+'元'}}
        </div>
        <!-- 立即购买 -->
        <div class="buy">
            <span></span>
            <input type="button" value="立即购买">
        </div>
    </div>
</template>

<script>
import rightTopRadio from "./right-top-radio"
import rightTopSelect from './right-top-select'
import rightTopQuantity from './right-top-quantity'
import rightTopCheck from './right-top-check'
export default {
  components: {
    rightTopRadio,
    rightTopSelect,
    rightTopQuantity,
    rightTopCheck
  },
  props: {
    tightTopData: Object
  },
  data(){
      return{
          TotalPrice:this.tightTopData.TotalPrice.Price
      }
  },
  methods:{
      calculation(i){
          this.TotalPrice=i*(this.tightTopData.TotalPrice.Price)
      }
  }
};
</script>

<style scoped>
.right-top {
  background: #ffffff;
  padding-bottom: 30px;
}
.right-top h2 {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding-left: 20px;
}
.right-top p {
  line-height: 1.8rem;
  margin-bottom: 30px;
  color: #999;
  background: #f7fcff;
  padding: 10px 20px;
}
.right-top div {
  height: 27px;
  line-height: 27px;
  padding-bottom: 20px;
}
.right-top span {
  display: inline-block;
  text-indent: 20px;
  width: 123px;
}
.buy input {
  width: 100px;
  height: 35px;
  background: #4fc08d;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  outline: none;
}
.buy input:focus {
  outline: none;
}
</style>