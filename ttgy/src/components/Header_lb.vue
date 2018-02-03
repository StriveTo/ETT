<template>
	<div class="Header">
		<article>
			<header>
				<!--头部-->
				<nav>
					<div class="back">
						<keep-alive>
						<a href="javascript:history.go(-1)" class="iconfont icon-zuojiantou1"></a>
						</keep-alive>
					</div>
					<div class="text">果园优选</div>
					<router-link :to="{name:'shopSearch'}">
					<a href="javascript:void(0);" class="next"><i class="iconfont icon-search"></i></a>
					</router-link>
				</nav>
				
			</header>
			<div class="swiper-container" id="swiper-container1">
			<div class="swiper-wrapper">
				<!-- <router-link> -->
				<div class="swiper-slide blue-slide"  style="width:50px;text-align: center;height: 0.36rem;line-height: 0.36rem;background: #fff;color: #969696;" v-for="item in title"   @click="changeName(item.name, item.id)">
					{{item.name}}
				</div>
			</div>
			<div class="swiper-pagination">
				&nbsp;</div>
			<ul class="sort" data-index="1">
				<li class="active">综合</li>
				<li class="">销量</li>
				<li class="">价格<em class="sort-price "></em></li>
			</ul>
		</div>
		</article>
		<ul class="film">
			<li v-for="item in list" >
				<a class="item" href="javascript:;"  style="flex: 0 0 auto;border-bottom: .01rem solid #d8d8d8;">
					<img class="good-img"  @click="gotoDetail(item.name, item.id)" :src="item.thum_min_photo" alt="">
					<dl class=""> <dt  @click="gotoDetail(item.name, item.id)">{{item.product_name}}</dt>
						<dd  @click="gotoDetail(item.name, item.id)">{{item.product_desc}}</dd>
						<dd  @click="gotoDetail(item.name, item.id)">{{item.volume}}</dd>
						<div > <small>￥</small><big>{{item.price}}</big><small></small> <span style="background: #FF8000">明日达  </span> </div>
					</dl>
					<div class="count">
						<span class="num" style="display: none;">1</span>
						<span data-id="9461" @click="addCart(item)" class="plus">
								<i class="iconfont icon-jiahao"></i></span>
					</div>
					<em>限时特惠</em>
				</a>
			</li>
		</ul>
		<router-link :to="{name:'Cart'}"><p class="cart-btn" href="javascript:;" style="display: inline;"><i class="iconfont icon-gouwuche1"></i> <span id="cart-num">{{$store.state.count}}</span></p></router-link>
	</div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import $ from "jquery";
export default {
  name: "Haeder_lb",
  data() {
    return {
      list: [],
      title: [],
      id: 0,
      detail: [],
	  goodsNum: 0,
	  add:[],
	  sort:0
    };
  },
  methods: {
    changeName(name, id) {
      this.list = null;
      this.id = this.$route.params.fid;
      console.log(id);
      this.changeId(id);
    },
    changeId(id) {
      axios
        .get(
          "/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=" +
            id +
            "&sort_type=1&tms_region_type=1"
        )
        .then(response => {
          // console.log(response);
          this.list = response.data.data.productGroup;
          this.title = response.data.data.brotherClass;
          this.detail = response.data.data.productGroup;
        //   console.log(this.detail);
          addCart(this.detail);
        })
        .catch(error => {
		//console.log(error);
        });
    },
    gotoDetail(name, id) {
      console.log(name);
      this.$router.history.push({ name: "Details", params: { fid: id } });
    },
    addCart(detail) {
		this.goodsNum++;
        this.goods(detail, this.goodsNum,1);   
    },
    goods(detail, num,cn) {
	  this.$store.dispatch("changeCount", num);
	  var index = this.add.indexOf(detail);
			if(index == -1){
				this.add.push(detail);
			}else{
				detail.hasSale = cn ? ++ detail.hasSale  : detail.hasSale;
				this.add.splice(index,1,detail);
			}	
			this.$store.dispatch("addToCart",this.add);
			console.log(this.add)
			this.init();			
    },
    //组件数据初始化
    init() {
      this.add = this.$store.state.cart;
      this.numgood = this.$store.state.count;
    }
  },
  mounted() {
    axios
      .get(
        "v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=366&sort_type=1&tms_region_type=1"
      )
      .then(response => {
        this.title = response.data.data.brotherClass;
        this.$nextTick(() => {
          var mySwiper1 = new Swiper("#swiper-container1", {
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            observer: true,
            slidesPerView: 5
          });
		  this.changeId(this.id);
		  this.init();	
        });
      })
      .catch(error => {
        //							console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style/Header_lb.scss">

</style>