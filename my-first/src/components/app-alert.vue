<template>
  <transition name="transalert">
    <div class="app-alert" v-show="alertShow">
        <div class="close" @click="close"><span>X</span></div>
        <alert-content>
          <div class="landed" slot="landed">
            <div class="username">
              <label>用户名：</label>
              <input type="text" placeholder="请输入用户名" v-model="userName" v-focus>
              <span>{{userErrors.errorText}}</span>
            </div>
            <div class="password">
              <label>密&emsp;码：</label>
              <input type="password" placeholder="请输入密码" v-model="passWord">
              <span>{{passErrors.errorText}}</span>
            </div>
            <div class="btn">
              <input type="button" value="登陆">
            </div>
          </div>
          <div class="login" slot="login">
            <div class="btn">
              <input type="button" value="登陆">
            </div>
          </div>
          <div class="about" slot="about">
            本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
          </div>
        </alert-content>
    </div>
  </transition>
</template>

<script>
import alertContent from "./alert-content"

export default {
  components: {
    alertContent
  },
  data() {
    return {
      userName: null,
      passWord: null,
      alertShow: false
    };
  },
  methods: {
    showHandle(payload) {
      this.alertShow = payload.showPanel;
    },
    close() {
      this.alertShow = false;
      this.$root.Bus.$emit("alertClose",false);
    }
  },
  computed:{
    userErrors(){
      let errorText,status
      if(!/@/g.test(this.userName)&&this.userName){
        status=false
        errorText='您输入的不包含@符号'
      }else{
        status=true
        errorText=''
      }
      return{
      status,
      errorText
      }
    },
    passErrors(){
      let errorText,status
      if(!/^\w{1,6}$/g.test(this.passWord)&&this.passWord){
        status:false
        errorText="您输入的密码不是1-6位"
      }
      else{
        status:true
        errorText=''
      }
      return{
        status,
        errorText
      }
    }
  },
  created() {
    this.$root.Bus.$on("show", this.showHandle);
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
.app-alert {
  position: absolute;
  top: 0;
  left: 50%;
  width: 734px;
  margin-left: -367px;
  z-index: 1;
  background: #ffffff;
  box-sizing: border-box;
  border: 2px solid #464068;
  transform: translateY(130px);
}
.close {
  text-align: right;
}
.close span {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
}
.close span:hover {
  color: #4fc08d;
}
.landed,
.login {
  padding: 8px 30px;
  font-size: 16px;
}
.landed .username,
.landed .password {
  margin-bottom: 30px;
}
.landed .username label,
.landed .password label {
  margin-right: 45px;
}
.landed .username input,
.landed .password input {
  height: 32px;
  width: 222px;
  box-sizing: border-box;
  padding: 0 10px;
}
.landed span{
  color: red;
  font-size: 14px;
  margin-left: 10px;
}
.landed .btn input,
.login .btn input {
  margin-left: 113px;
  margin-bottom: 42px;
  height: 43px;
  width: 70px;
  background: #4fc08d;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  outline: none;
}
.about {
  padding: 0 30px 30px;
  font-size: 14px;
  line-height: 20px;
}
.transalert-enter-active,
.transalert-leave-active {
  transition: all 0.3s;
}
.transalert-enter,
.transalert-leave-to {
  transform: translateY(-300px);
}
.transalert-enter-to,
.transalert-leave {
  transform: translateY(130px);
}
</style>