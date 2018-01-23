window.addEventListener('load', kaishi, false);
function kaishi() {

  //调用rem
  setSize();
  //调用swiper动画
  swiper();
  //添加电话号码
  tel();
  //预约试驾 互动问答
  yuyue();
  //我要提问
  tiwen();
}
//swiper动画
function swiper() {

  //控制页面的轮播图
  var nav = new Swiper('.naw', {
    autoHeight: true,
    loop: false,
    
    //页面切换后执行的函数
    onSlideChangeStart: function (swiper) {
      index = swiper.activeIndex;
      fn();
    },
  })

  //页面首页轮播图
  var daohang = new Swiper('.daohang', {
    direction: 'horizontal',
    loop: true,
    autoplay: 2000,

    // 如果需要分页器
    pagination: '.swiper-pagination'
  })

  //车型亮点轮播图
  var chexing = new Swiper('.chexing', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })

  //video的轮播图
  var video = new Swiper('.video', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })

  //获取所有元素
  var oFooter = document.querySelector('#dilan'),
    oUl = document.querySelector('#nav'),
    aLi = oUl.querySelectorAll('li'),
    aSpan = oUl.querySelectorAll('span'),
    aI = oUl.querySelectorAll('i'),
    aP = oUl.querySelectorAll('p');

  //给导航加上抬起事件 
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].addEventListener('touchend', end, false);
    aLi[i].addEventListener('mouseup', end, false);
  }
  //抬起切换页面事件
  function end() {
    index = this.index;
    fn();
    nav.setWrapperTransition(htmlWidth);
    nav.setWrapperTranslate(index * -htmlWidth);
  }

  //重复的函数
  function fn() {
    for (var i = 0; i < aI.length; i++) {
      aI[i].id = '';
      aP[i].className = '';
    }
    aI[index].id = 'active-logo';
    aP[index].className = 'active';
    index == '0' ? oFooter.style.display = 'block' : oFooter.style.display = 'none';
  }
}

//添加电话号码
function tel() {
  var oUl = document.querySelector('#list'),
    aLi = oUl.querySelectorAll('li'),
    aDiv = [],
    aSpan = [],
    aA = [];

  for (var i = 0; i < aLi.length; i++) {
    var oDiv = aLi[i].querySelector('div');
    aDiv.push(oDiv)
  }

  for (var i = 0; i < aDiv.length; i++) {
    var oSpan = aDiv[i].querySelector('span');
    var oA = aDiv[i].querySelector('a');
    aSpan.push(oSpan);
    aA.push(oA);
  }

  for (var i = 0; i < aSpan.length; i++) {
    aA[i].href = 'tel:' + aSpan[i].innerHTML + ''
  }
}

//预约试驾 互动问答
function yuyue() {
  //获取元素
  var oMeng = document.querySelector('#mengceng'),
    oDilan = document.querySelector('#dilan'),
    oDianji = oDilan.querySelectorAll('a')[2],
    oBut = oDilan.querySelector('.wenda'),
    oWenda = document.querySelector('#wenda'),
    oTiwen = document.querySelector('#tiwen'),
    tiwenH = oTiwen.offsetHeight,
    shouyeFanhui = document.querySelector('#shijia-fanhui'),
    wendaFanhui = document.querySelector('#wenda-fanhui'),
    oShijia = document.querySelector('#shijia');


  //设置3d加速，设置fransform初始值
  transForm(oShijia, 'translateZ', 0.01);
  transForm(oShijia, 'translateX', htmlWidth);
  transForm(oWenda, 'translateZ', 0.01);
  transForm(oWenda, 'translateX', htmlWidth);

  //手指抬起时蒙层和预约试驾页面出现
  oDianji.addEventListener('touchend', function () { end(oShijia) }, false);
  oDianji.addEventListener('mouseup', function () { end(oShijia) }, false);
  oBut.addEventListener('touchend', function () { end(oWenda) }, false);
  oBut.addEventListener('mouseup', function () { end(oWenda) }, false);
  function end(el) {
    oTiwen.style.WebkitTransition = oTiwen.style.transition = 'none';
    transForm(oTiwen, 'translateY', tiwenH);
    oMeng.style.display = 'block';
    el.style.WebkitTransition = el.style.transition = '500ms'
    transForm(el, 'translateX', 0);
  }

  //手指抬起时预约试驾页面消失，并且在页面消失后蒙层消失
  shouyeFanhui.addEventListener('touchend', function () { fanhui(oShijia) }, false);
  shouyeFanhui.addEventListener('mouseup', function () { fanhui(oShijia) }, false);
  wendaFanhui.addEventListener('touchend', function () { fanhui(oWenda) }, false);
  wendaFanhui.addEventListener('mouseup', function () { fanhui(oWenda) }, false);
  function fanhui(el) {
    setTimeout(function () { oMeng.style.display = 'none'; }, 400);
    el.style.WebkitTransition = el.style.transition = '500ms'
    transForm(el, 'translateX', htmlWidth);
  }

  //给预约试驾页面添加事件
  oShijia.addEventListener('touchstart', start, false);
  oShijia.addEventListener('touchmove', move, false);
  oShijia.addEventListener('touchend', taiqi, false);
  oWenda.addEventListener('touchstart', start, false);
  oWenda.addEventListener('touchmove', move, false);
  oWenda.addEventListener('touchend', taiqi, false);

  //手指触摸时记录手指坐标跟元素坐标
  function start(e) {
    this.style.WebkitTransition = this.style.stransition = 'none'
    this.startPegaX = e.changedTouches[0].pageX;
    this.startX = transForm(this, 'translateX');
    this.startTime = new Date().getTime();
    this.lastX = this.startX;
    this.lastTime = this.startTime;
    this.lastDis = this.timeDis = 0;
  }

  //手指移动时元素跟随手指动
  function move(e) {
    this.movePegaX = e.changedTouches[0].pageX;
    this.moveTime = new Date().getTime();
    this.moveX = this.startX + (this.movePegaX - this.startPegaX);
    if (this.moveX < 0) {
      this.moveX = 0;
    }
    transForm(this, 'translateX', this.moveX);
    this.lastDis = this.moveX - this.lastX;
    this.timeDis = this.moveTime - this.lastTime;
    this.lastX = this.moveX;
    this.lastTime = this.moveTime;
  }

  //手指抬起时，元素的位置取决于显示还是隐藏
  function taiqi() {
    if (this.lastTime == 0) {
      return;
    }
    this.spped = this.lastDis / this.timeDis * 2;
    this.target = transForm(this, 'translateX') + transForm(this, 'translateX') * this.spped;
    transForm(this, 'translateX', this.target);
    if (Math.abs(transForm(this, 'translateX')) > Math.abs(htmlWidth / 2)) {
      setTimeout(function () { oMeng.style.display = 'none'; }, 200);
      this.style.WebkitTransition = this.style.transition = '200ms'
      transForm(this, 'translateX', htmlWidth);
    }
    else {
      this.style.WebkitTransition = this.style.transition = '200ms'
      transForm(this, 'translateX', 0);
    }
  }
}

//提问
function tiwen() {
  var oBlock = document.querySelector('.footer'),
    oHidden = document.querySelector('.no'),
    oTiwen = document.querySelector('#tiwen'),
    tiwenH = oTiwen.offsetHeight;

  oBlock.addEventListener('touchend', Block, false);
  oHidden.addEventListener('touchend', Hidden, false);

  transForm(oTiwen, 'translateZ', 0.01);
  transForm(oTiwen, 'translateY', tiwenH);
  function Block() {
    oTiwen.style.WebkitTransition = oTiwen.style.transition = '500ms';
    transForm(oTiwen, 'translateY', 0);
  }
  function Hidden() {
    oTiwen.style.WebkitTransition = oTiwen.style.transition = '500ms';
    transForm(oTiwen, 'translateY', tiwenH);
  }
}

/* function jiazai() {
  var oPage2 = document.querySelector('.page2'),
      oMeng=document.querySelector('#mengceng'),
      mImg=oMeng.querySelector('img'),
      aA = oPage2.querySelectorAll('a');

  for (var i = 0; i < aA.length; i++) {
    var img = aA[i].querySelector('img');
    aA[i].style.backgroundImage = 'url(' + img.src + ')';
    if(i>0){
      aA[i].addEventListener('touchend',end,false);
    }
  }

  function end(){
    var oImg=this.querySelector('img'),
        imgTop=oImg.getBoundingClientRect().top,
        imgLeft=oImg.getBoundingClientRect().left;
    oMeng.style.display='block';
    mImg.style.display='block';
    oImg.style.zIndex='10';
    oImg.style.height=htmlWidth/oImg.offsetWidth*oImg.offsetHeight+'px';    
    oImg.style.width=htmlWidth+'px';
    oImg.style.left=-imgLeft+'px';
    oImg.style.top=-imgTop+'px';
  }
} */

