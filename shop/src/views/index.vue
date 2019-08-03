<template>
  <div class="index">
    <div class="footerNav">
      <router-link to="/index/home">
        <p class="iconfont">&#xe61d;</p>
        <p>首页</p>
      </router-link>
      <router-link to="/index/tuan">
        <p class="iconfont">&#xe610;</p>
        <p>拼团</p>
      </router-link>
      <router-link to="/index/buyCart">
        <p class="iconfont">&#xe899;</p>
        <p>购物车</p>
      </router-link>
      <router-link to="/index/mine">
        <p class="iconfont">&#xe61a;</p>
        <p>我的</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.index{
  display: flex;
  flex-direction:column;
}
.footerNav{
  width: 100%;
  height: 1rem;
  background: #fff;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 35;
}
.footerNav a{
  color:#999;
  flex: 1;
  margin-top: 0.1rem;
}
.footerNav a .iconfont{
  font-size: 24px;

}
.footerNav .router-link-exact-active{
    color:#fe4070;
}


</style>
