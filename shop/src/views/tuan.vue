<template>
  <div class="about">
    <div class="conta">
      <ul class="list-titel">
        <li v-for="(item,index) in list" :key="index" @click="change(item.id)">{{item.name}}</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="item in data" :key="item.item_id">
          <router-link :to="'/goodsDetail?item_id='+item.item_id+'&type='+item.type">
            <div class="content-txt">
              <span class="number">{{item.buyer_number_text}}</span>
              <img :src="item.image" />
            </div>
            <p class="des">
              <span>{{item.group_name_tag}}</span>
              <i>{{item.short_name}}</i>
            </p>
            <div class="price">
              <span class="price-now">{{item.jumei_price}}</span>
              <span class="tuan">去开团</span>
              <p class="price-old">{{item.single_price}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "推荐", id: "coutuan_home" },
        { name: "美妆", id: "coutuan_makeup" },
        { name: "母婴健康", id: "coutuan_baby" },
        { name: "饰品配饰", id: "coutuan_jewellery" },
        { name: "百科礼品箱包", id: "coutuan_bag" },
        { name: "数码家电", id: "coutuan_baby" },
        { name: "家居", id: "coutuan_furniture" },
        { name: "内衣", id: "coutuan_underwear" },
        { name: "食品保健", id: "coutuan_pre" },
        { name: "女装", id: "coutuan_jewellery" },
        { name: "鞋类", id: "coutuan_bag" },
        { name: "下期预告", id: "coutuan_pre" }
      ],
      data: ""
    };
  },
  created() {
    this.$axios
      .get("/jm/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20")
      .then(res => {
        this.data = res.data.data;
        console.log(this.data);
      });
  },
  methods: {
    change(id) {
      this.$axios
        .get(`/jm/yiqituan/tab_list?tab=${id}&page=1&per_page=20`)
        .then(res => {
          this.data = res.data.data;
          console.log(this.data);
        });
    }
  }
};
</script>

<style scoped>
.about {
  background: #f5f5f5;
  overflow: auto;
}
.conta {
  position: fixed;
  background: #fff;
  top: 0;
  overflow: auto;
  z-index: 45;
}
.list-titel {
  min-width: max-content;
  color: #666;
  height: 100%;
  padding: 0 0.6rem 0 0.2rem;
  border-bottom: 0.02rem solid #eee;
  height: 0.88rem;
  line-height: 0.88rem;
}
.list-titel li {
  float: left;
  height: 100%;
  margin-left: 0.4rem;
  font-size: 0.32rem;
}

.list-titel li:hover {
  color: #fe4070;
  border-bottom: 0.04rem solid #fe4070;
}

.content {
  padding-top: 0.38rem;
  width: 100%;
  padding-bottom: 0.88rem;
}

.content li {
  width: 100%;
  height: 5.2rem;
  background: #fff;
  margin-bottom: 0.2rem;
}

.content-txt {
  width: 100%;
  height: 3.1rem;
  text-align: center;
  position: relative;
  margin-bottom: 0.4rem;
}

.content-txt img {
  height: 150px;
  width: 150px;
  margin-left: 100px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.number {
  position: absolute;
  left: 0.26rem;
  z-index: 1;
  top: 3rem;
  border: 0.02rem solid #eee;
  border-left: 0;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  color: #666;
  background: rgba(251, 251, 251, 0.8);
}

.des {
  width: 100%;
  font-size: 0.32rem;
  margin-bottom: 0.1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.des span {
  color: #fe4070;
}
.des i {
  font-size: 0.28rem;
  color: #424242;
}

.price {
  width: 100%;
  margin-top: 0.4rem;
  padding-left: 0.2rem;
}
.price-now {
  font-size: 0.32rem;
  color: #fe4070;
}

.tuan {
  float: right;
  text-align: center;
  margin-right: 0.4rem;
  width: 1.6rem;
  height: 0.6rem;
  font-size: 0.32rem;
  line-height: 0.6rem;
  border-radius: 0.5rem;
  background: #fe4070;
  color: #fff;
}

.price-old {
  color: #999;
  font-size: 0.24rem;
}
</style>
