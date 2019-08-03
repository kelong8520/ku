<template>
  <div class="booking">
    <div class="booking_top">
      <img src="../assets/4214986_1000_1000.jpg" alt="">
      <span>34234条评论</span>
    </div>
    <div class="booking_middle">
      <span>[2人团]</span>
      【手机专享】无印良品温和洁面乳120g
    </div>
    <div class="booking_foot">
      <div class="booking_foot_left">
        <span>
          ¥69
        </span>
        <span>
          单买价¥88
        </span>
      </div>
      <div>
        去开团
      </div>
    </div>
  </div>
</template>
<style scoped>
  .booking_top{
    position: relative;
    width: 7.5rem;
    height: 3.1rem;
  }
  .booking_top img{
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  .booking_top span{
        position: absolute;
    left: 0;
    top: 2.875rem;
    z-index: 1;
    border: .0625rem solid #eee;
    border-left: 0;
    border-top-right-radius: 1.5625rem;
    border-bottom-right-radius: 1.5625rem;
    color: #666;
    background: rgba(251,251,251,.8);
    font-size: .22rem;
    padding: .08rem .14rem;
  }
  .booking_middle{
    font-size: .28rem;
    max-height: .68rem;
    line-height: .36rem;
    padding: 0 .24rem;
    margin-top: .2rem;
    color: #424242;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
    
  }
  .booking_middle span{
    color: #fe4070;
    display: inline-block;
    margin-left: .04rem;
    font-size: .28rem;;
    line-height: .36rem;
  }
  
  .booking_foot{
    padding: .24rem .24rem .24rem .24rem;
  }
  .booking_foot_left{
    float: left;
    font-family: Arial;
    box-sizing: border-box;
  }
  .booking_foot_left span:nth-of-type(1){
  font-size: .36rem;
  color: #fe4070;
  }
  .booking_foot_left span:nth-of-type(2){
    font-size: .22rem;
    color: #999;
    display: block;;
  }
  .booking_foot div:nth-of-type(2){
    height: .52rem;
    border-radius: .5rem;
    line-height: .52rem;
    font-size: .28rem;
    width:1.8rem;
    background: #fe4070;
    float: right;
    color: #fff;
    text-align: center;
    border-right: .04rem solid #fe4070;
  }

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,/* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
fieldset, legend, button, input, textarea, /* form elements 表单元素 */
th, td section article header footer nav aside figure figcaption{ /* table elements 表格元素 */
    margin: 0;
    padding: 0;
}
img{
	display: block;
}
.clear:after{
	content: "";clear: both;display: block;
}
a{
    text-decoration:none;
}
li{
   list-style:none;
}
</style>
