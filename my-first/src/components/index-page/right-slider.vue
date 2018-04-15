<template>
    <div @mouseover="clearInv()" @mouseout="setInv()">
        <ul class="img">
            <li v-for="itme in list">
              <router-link :to="list[listIndex].url" tag="a">
                <transition :name="listOld">
                  <img :src="list[listIndex].src" v-if="isShow">
                </transition>
                <transition :name="listShow">
                  <img :src="list[listIndex].src" v-if="!isShow" >
                </transition>
              </router-link>
            </li>
        </ul>
        <h2>{{list[listIndex].title}}</h2>
        <ul class="index">
            <li @click="tab(previous)"><</li>
            <li><a href="####" v-for="(itme,index) in list" @click="tab(index)" :class="{'on':index===listIndex}">{{index+1}}</a></li>
            <li @click="tab(next)">></li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("../../assets/slideShow/pic1.jpg"),
          title: "xxx1",
          url: "/detail/count"
        },
        {
          src: require("../../assets/slideShow/pic2.jpg"),
          title: "xxx2",
          url: "/detail/forecast"
        },
        {
          src: require("../../assets/slideShow/pic3.jpg"),
          title: "xxx3",
          url: "/detail/analysis"
        },
        {
          src: require("../../assets/slideShow/pic4.jpg"),
          title: "xxx4",
          url: "/detail/publish"
        }
      ],
      listIndex: 0,
      listSpeed: 2000,
      isShow:true,
      Old:{
        left:'list-old-left',
        right:'list-old-right'
      },
      Show:{
        left:'list-show-left',
        right:'list-show-right'
      },
      listOld:null,
      listShow:null
    };
  },
  methods: {
    tab(index) {
      setTimeout(() => {
        this.isShow=false;
        this.listIndex = index;
      }, 10);
      this.isShow=true;
    },
    //自动切换
    setInv() {
      this.Inv = setInterval(() => {
        this.tab(this.next);
      }, this.listSpeed);
    },
    clearInv() {
      clearInterval(this.Inv);
    }
  },
  computed: {
    //上一张
    previous() {
      this.listOld=this.Old.right;
      this.listShow=this.Show.right;
      if (this.listIndex === 0) {
        return this.list.length - 1;
      } else {
        return this.listIndex - 1;
      }
    },
    //下一张
    next() {
      this.listOld=this.Old.left;
      this.listShow=this.Show.left;
      if (this.listIndex === this.list.length - 1) {
        return 0;
      } else {
        return this.listIndex + 1;
      }
    }
  },
  //生命周期，钩子函数
  mounted() {
    this.setInv();
  }
};
</script>

<style scoped>
div {
  position: relative;
  width: 915px;
  height: 515px;
  overflow: hidden;
  margin: 15px 0;
  font-size: 15px;
}
.img {
  width: 3660px;
}
.img li {
  width: 915px;
  float: left;
}
.img li img {
  position: absolute;
  width: 100%;
}
h2 {
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  color: #ffffff;
  text-indent: 20px;
  font-weight: bold;
}
.index {
  position: absolute;
  right: 0;
  bottom: 2px;
}
.index li {
  float: left;
  line-height: 40px;
  color: #ffffff;
  cursor: pointer;
}
.index li,
.index li a {
  padding: 0 10px;
}
.on {
  color: red;
  text-decoration: underline;
}
.list-old-left-leave-active,.list-show-left-enter-active,.list-old-right-leave-active,.list-show-right-enter-active{
  transition: all 1s;
}
.list-old-left-leave-to{
  transform: translateX(-915px);
}
.list-show-left-enter{
  transform: translateX(915px)
}
.list-old-right-leave-to{
  transform: translateX(915px);
}
.list-show-right-enter{
  transform: translateX(-915px)
}
</style>