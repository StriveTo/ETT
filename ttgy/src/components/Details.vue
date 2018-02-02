<template>
	<div class="Details">
		
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
		<div class="comment-item" id="first-comment">
			<div class="comment-total"><span class="pull-right"><small class="orange">96%</small>好评<i class="iconfont icon-morehome"></i></span>评价(1055)</div>
			<div class="comment-con-chief" v-for="item in part">
				<div class="comment-info"> <img class="avatar" :src="item.userface">
					<div><span class="user">{{item.user_name}}</span> <i class="iconfont icon-v_mini5"></i></div><span class="date">2018-01-29</span> </div>
					<div class="comment-level"><span>口感 {{item.star_eat}}</span><span>颜值 {{item.star_show}}</span></div>
					<div class="comment-msg">{{item.content}}</div>
					<div class="comment-img">
						 <img :src="item.images[0]">
						 <img :src="item.images[1]">
					</div>
					<!-- <div style="height:100px;"> {{item.userface}} </div> -->
			</div>
			<!-- <div class="text-center"><span class="comment-view">查看全部评论</span></div> -->
		</div>
		<footer class="main-nav" id="cart-nav">
			<router-link class="cart-btn" :to="{name:'Cart'}">
				<i class="iconfont icon-gouwuche1"></i> <span id="cart-num"></span>
			</router-link>
			<a class="add-cart"   @click="showMsg()" href="javascript:;"><span id="deliver">明日达</span><em>加入购物车</em></a>
				
		</footer>
	</div>
</template>

<script>
	import axios from "axios";
	// import Part from "./Part";
	// import Evaluate from "./Evaluate";

	import { Swipe, SwipeItem } from "mint-ui";
	export default {
		name: "Detail",
		components:	{

		},
		data: function() {
			return {
				list: [],
				photo: [],
				weight:[],
				part:[]
			};
		},
		methods:{
				showMsg(){
					this.$toast({
						message: '购物车添加成功',
						position: 'center',
						duration: 5000
					});
					console.log("测试Cart")
					 console.log("fd" + this.$route.params.fid)
                    var id = this.$route.params.fid;
					this.$router.history.push({name:'Cart', params:{fid: id}})
				},
				addP(){
					var id = this.$route.params.fid;
					console.log("part" + id)
					axios.get(`/v3/comment/rate_and_comment?product_id=${id}`)
					.then((res)=>{
						console.log(res);
						this.part = res.data.data.data;
						this.po = res.data.data
						console.log(this.part)
					})
				}
		},
		mounted() {
			// console.log(this);
			// console.log(this.$route.params.fid);
			var id = this.$route.params.fid;

				// console.log("Evaluate" + this.id)
			axios
				.get(
					`/v3/product/detail?store_id_list=3&product_id=${id}&store_id=&delivery_code=3`
				)
				.then((res) => {
					console.log(res);
					this.list = res.data.data.productInfo;
					this.photo = res.data.data.templatePhoto;
					this.weight = res.data.data.productItem;
				});
					this.addP()
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style/Details.scss">
 @import "./style/particulars.scss"
</style>