<template>
    <div class="app-header">
        <div class="content">
            <router-link :to="{path:'/'}" tag="span" class="logo">
                <img src="../assets/logo.png">
            </router-link>
            <ul class="list">
                <li><a href="####" @click="isShow('landed')">登陆</a></li>
                <li><a href="####">丨</a></li>
                <li><a href="####" @click="isShow('login')">注册</a></li>
                <li><a href="####">丨</a></li>
                <li><a href="####" @click="isShow('about')">关于</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    isShow(name) {
      this.$root.Bus.$emit("show", {
        showPanel: true,
        name: name
      });
    }
  }
};
</script>

<style scoped>
.app-header {
  height: 90px;
  background: #363636;
  overflow: hidden;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  display: block;
  margin-top: 22px;
  float: left;
  cursor: pointer;
}
.logo img {
  width: 50px;
  height: 45px;
}
.list {
  float: right;
}
.list li {
  float: left;
  color: #b2b2b2;
  font-size: 15px;
  margin-left: 10px;
  line-height: 90px;
}
</style>