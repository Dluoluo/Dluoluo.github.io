<template>
    <div class="right-top-select" v-if="componentsIsShow">
        <div class="selected" @click.prevent="isShow=!isShow">{{text}}<span></span></div>
        <ul v-show="isShow">
            <li v-for="itme in DateArray" @click="selected">{{itme}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    DateArray: Array,
    componentsIsShow: Boolean
  },
  data() {
    return {
      isShow: false,
      text: this.DateArray[0]
    };
  },
  methods: {
    selected(event) {
      let el = event.target;
      this.text = el.innerHTML;
      this.isShow = false;
    }
  },
  created() {
    // 点击其他不在的区域触发事件
    document.addEventListener("click", e => {
      if (!this.$el.contains(e.target)) {
        this.isShow = false;
      }
    });
  }
};
</script>

<style scoped>
.right-top-select,
.right-top-select .selected {
  display: inline-block;
}
.right-top-select .selected,
.right-top-select ul li {
  cursor: pointer;
  height: 27px;
  line-height: 27px;
  padding: 0 21px 0 11px;
  box-sizing: border-box;
}
.right-top-select .selected {
  border: 1px solid #e3e3e3;
  border-radius: 2px;
}
.right-top-select .selected span {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.right-top-select ul {
  position: absolute;
  margin-top: -2px;
  border: 1px solid #e3e3e3;
  background: #ffffff;
  box-sizing: border-box;
}
.right-top-select ul li:hover {
  background: #e3e3e3;
}
</style>