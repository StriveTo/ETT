<template>
	<div id="Cart">
		<nav>
			<div class="back">
				<a href="javascript:history.go(-1)" class="iconfont icon-zuojiantou1"></a>
			</div>
			<div class="text">购物车</div>
			<a href="javascript:;" class="next"><span class="edit">编辑</span>
				<!--<span class="end hide">完成</span>--></a>
		</nav>
		<section class="container cart iconfont">
			<div id="address-con">
				<a href="javascript:;" class="section address hasaddress">
					<div class="specific"> <i class="iconfont icon-location"></i>
						<div class="infor" @click="goToSec()"> 添加地址 </div> <i class="iconfont icon-arrow-right"></i> </div>
				</a>
			</div>
			<div id="cart-con">
				<div class="title">
					<span>商品清单</span>
					<span class="pull-right">总重约0kg</span>
				</div>
				</ul>
			</div>
			<ul id="cart-list" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
				<li class=""  v-for="item in all">
					<i id="ic" @click="classPrice(item)"><span v-if='item.setAlert'>&#xe6eb;</span></i>
					<a href="javascript:;">
						<div class="pro-img">
							<span id="xs">限时特惠</span>
							<img style="width:90px;height:90px" :src="item.thum_min_photo">
						</div>
						<div class="pro-info">
							<h3>{{item.product_name}}</h3>
							<h4>  </h4>
							<h5><span>{{item.volume}}</span></h5>
							<p>
								<span class="price">
									<small>￥</small>
									<em>{{item.price}}</em>
									<small></small>
								</span>
								<span class="tag" style="background: #FF8000"> 明日达   </span>
								<div class="count">
									<span class="minus" @click="subNum(item)">
									<i class="iconfont icon-subtract"></i>
								</span>
									<span class="num">{{item.hasSale}}</span>
									<span class="plusplus" @click="skuNum(item)">
									<i class="iconfont icon-add"></i>
								</span>
								</div>
							</p>
						</div>
					</a>
					<!--<span class="remove">删除</span>-->
				</li>
			</ul>
		</section>
		<footer class="base-nav iconfont" id="cart-nav">
			<span id="select_all" @click="allselect()">
				<i class="icon-duihao-copy" v-if='quanxuan == false'>
				</i><i v-if='quanxuan' class="iconfont">&#xe6eb;</i> 全选</span>
			<div class="info">
				<div class="total">合计：<small>￥</small><em>{{sum}}</em>
					<small></small>
				</div>
				<!--<div class="empty hide">
					<span>清空购物车</span>
				</div>-->

			</div>
			<a class="account" href="javascript:;">结算({{settlement}}) </a>
			<!--<span class="delete hide">删除</span>-->
		</footer>
	</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      all: [],
      numgood: 0,
      jiesuanshuliang: 0,
      sum: 0,
      settlement: 0,
      quanxuan: false
    };
  },
  mounted() {
    this.all = this.$store.state.cart;
    this.numgood = this.$store.state.count;
  },
  methods: {
    skuNum(detail) {
      this.numgood += 1;
      this.goods(detail, this.numgood, 1);
    },
    subNum(detail) {
      this.numgood -= 1;
      detail.hasSale--;
      this.goods(detail, this.numgood, 0);
    },
    goods(detail, num, cn) {
      this.$store.dispatch("changeCount", num);
      var index = this.all.indexOf(detail);
      detail.hasSale = cn ? ++detail.hasSale : detail.hasSale;
      this.all.splice(index, 1, detail);
      this.$store.dispatch("addToCart", this.all);
    },
    //商品总合计
    getSum() {
      var s = 0;
      //商品选中计数
      var goodsjishu = 0;
      var jiesuannum = 0;
      //遍历购物车所有商品
      for (var i = 0; i < this.all.length; i++) {
        if (this.all[i].setAlert) {
          //选中状态求和
          s += this.all[i].hasSale * this.all[i].price;
          jiesuannum += this.all[i].hasSale;
          goodsjishu++;
        }
      }
      //保留两位小数
      this.sum = s.toFixed(2);
      this.settlement = jiesuannum;
      //全部都处于选中状态全选按钮选中
      if (goodsjishu == this.all.length) {
        this.quanxuan = true;
      } else {
        this.quanxuan = false;
      }
    },
    //当前商品点击事件
    classPrice(classDetails) {
      classDetails.setAlert = !classDetails.setAlert;
      if (classDetails.setAlert) {
        this.getSum();
      } else {
        this.goodinit();
        this.getSum();
      }
      this.goods(classDetails, this.numgood, 0);
    },
    goodinit() {
      this.settlement = 0;
      this.sum = 0.0;
    },
    //改变所有商品选中状态
    changeselect(boo) {
      for (var j = 0; j < this.all.length; j++) {
        this.all[j].setAlert = boo;
      }
      this.goods(this.all[0], this.numgood, 0);
    },
    allselect() {
      this.quanxuan = !this.quanxuan;
      this.changeselect(this.quanxuan);
      if (this.quanxuan) {
        this.getSum();
      } else {
        this.goodinit();
      }
    },
    goToSec() {
      this.$router.history.push({ name: "search" });
    }
  }
};
</script>

<style scoped lang="scss" src="./style/Cart.scss">

</style>