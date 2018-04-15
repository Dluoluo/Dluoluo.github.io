<template>
    <div>
        <right-top :tightTopData="tightTopData"></right-top>
        <right-bottom :rightBottomData="rightBottomData"></right-bottom>
    </div>
</template>

<script>
import rightTop from "./right-top";
import rightBottom from "./right-bottom";
export default {
  components: {
    rightTop,
    rightBottom
  },
  data() {
    return {
      tightTopData: {
        h2: "流量分析",
        p:
          "是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的",
        quantity: {
          name: "购买数量："
        },
        type: {
          name: "产品类型：",
          Array: ["入门版", "中级版", "高级版"],
          select: true
        },
        timeArray: {
          name: "有效时间：",
          Array: ["半年", "一年", "三年"],
          radio: true
        },
        version: {
          name: "产品版本：",
          Array: ["客户版", "代理商版", "专家版"]
        },
        TotalPrice: {
          name: "总价：",
          Price: 678
        }
      },
      rightBottomData: {
        h2: "产品说明",
        p:
          "网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。",
        Indicators: {
          h1: "用户行为指标",
          li: [
            "用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：",
            "用户在网站的停留时间；",
            "用户所使用的搜索引擎及其关键词；",
            "在不同时段的用户访问量情况等"
          ]
        },
        mode: {
          h1: "浏览网站方式",
          li: [
            "用户上网设备类型",
            "用户浏览器的名称和版本",
            "访问者电脑分辨率显示模式",
            "用户所使用的操作系统名称和版本",
            '用户所在地理区域分布状况等'
          ]
        }
      }
    };
  }
};
</script>

<style scoped>

</style>