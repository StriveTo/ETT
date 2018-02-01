<template>
	<div class="Details">
		<article>
			<header>
				<!--头部-->
				<nav>
					<div class="back">
							<a href="javascript:history.go(-1)" class="iconfont icon-zuojiantou1"></a>
					</div>
					<ul class="tab-menu">
						<li class="active">商品</li>
						<li>详情</li>
						<li>评价</li>
					</ul>
					<a href="javascript:void(0);" class="next"><i class="iconfont icon-search"></i></a>
				</nav>
			</header>

		</article>
		<!-- <div style="width:200px;height:200px;" v-for="item in list">
				{{item.gift_url}}
			</div> -->
		<mt-swipe class="mt" :show-indicators="false">
			<mt-swipe-item v-for="item in photo">
				<img :src="item.big_image" alt="">

			</mt-swipe-item>
		</mt-swipe>
		<div class="info-item">
			<h3> {{list.product_name}} </h3>
			<h4>{{list.product_desc}}</h4>
			<div class="price"><small>￥</small><em>{{list.price}}</em><small></small> <del>￥{{list.old_price}}</del> </div>
			<div class="size"> <span class="cur" data-pid="9461"> <strong>{{weight[0].volume}}</strong> <small>  明日达  </small> </span> <em>最快02月02日09:00-18:00送达</em> </div>
			<h5></h5> </div>

		<div class="address-item"> <span class="title">送至</span>
			<h4><i class="iconfont icon-address"></i>沙河镇 </h4> </div>
		<div class="tip">
			<p>
				<span><i class="iconfont icon-duigou"></i>48小时退换货</span>
				<span><i class="iconfont icon-duigou"></i>全程冷链</span>
				<span><i class="iconfont icon-duigou"></i>果园标准</span>
				<span><i class="iconfont icon-duigou"></i>全球直采</span>
			</p>
		</div>
		<div class="part">
			<Part/>
		</div>	
		<footer class="main-nav" id="cart-nav">
			<a class="cart-btn" href="./cart.html"><i class="iconfont icon-gouwuche1"></i> <span id="cart-num"></span></a>
			<a class="add-cart" href="javascript:;"><span id="deliver">明日达</span><em>加入购物车</em></a>
				
		</footer>
	</div>
</template>

<script>
	import axios from "axios";
	import Part from "./Part";

	import { Swipe, SwipeItem } from "mint-ui";

	export default {
		name: "Detail",
		components:	{
			Part
		},
		data: function() {
			return {
				list: [],
				photo: [],
				weight:[]
			};
		},
		methods(){
				// Toast(){

				// }
		},
		mounted() {
			// console.log(this);
			// console.log(this.$route.params.fid);
			var id = this.$route.params.fid;
			axios
				.get(
					`/v3/product/detail?store_id_list=3&product_id=${id}&store_id=&delivery_code=3`
				)
				.then((res) => {
					// console.log(res);
					this.list = res.data.data.productInfo;
					this.photo = res.data.data.templatePhoto;
					this.weight = res.data.data.productItem;
					// console.log(this.list)
				});
				// this.getP(id);
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style/Details.scss">

</style>