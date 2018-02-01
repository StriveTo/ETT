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
				<div class="swiper-slide blue-slide" style="width:50px;text-align: center;height: 0.36rem;line-height: 0.36rem;background: #fff;color: #969696;" v-for="item in title"   @click="changeName(item.name, item.id)">
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
				<a class="item" href="javascript:;"  style="flex: 0 0 auto;border-bottom: .01rem solid #d8d8d8;" @click="gotoDetail(item.name, item.id)">
					<img class="good-img" :src="item.thum_min_photo" alt="">
					<dl class=""> <dt>{{item.product_name}}</dt>
						<dd>{{item.product_desc}}</dd>
						<dd>{{item.volume}}</dd>
						<div> <small>￥</small><big>{{item.price}}</big><small></small> <span style="background: #FF8000">明日达  </span> </div>
					</dl>
					<div class="count">
						<span class="num" style="display: none;">1</span>
						<span data-id="9461" class="plus">
								<i class="iconfont icon-jiahao"></i></span>
					</div>
					<em>限时特惠</em>
				</a>
			</li>
		</ul>
		<router-link :to="{name:'Cart'}"><p class="cart-btn" href="./cart.html" style="display: inline;"><i class="iconfont icon-gouwuche1"></i> <span id="cart-num">1</span></p></router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	import Swiper from 'swiper'
	import $ from 'jquery'
	export default {
		name: 'Haeder_lb',
		data() {
			return {
				list: [],
				title:[],
				id:0
			}
		},
		methods: {
			changeName(name, id){
				this.list = null;
//				this.$store.dispatch("setUserName", name)
//				this.$router.history.push({name:'List', params:{fid: id}})
				console.log(id)
				this.changeId(id)
			},
			changeId(id){
//				console.log(id)
						axios.get('/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id='+ id +'&sort_type=1&tms_region_type=1')
						.then((response) => {
//							console.log(response);
							this.list = response.data.data.productGroup;
							this.title = response.data.data.brotherClass;
						})
						.catch((error) => {
//							console.log(error);
						});
			},
			gotoDetail(name, id) {
				// this.$store.dispatch("setUserName", name)
				console.log(name);
				this.$router .history.push({name:'Details', params:{fid: id}});
			}
		},
		mounted() {
			axios.get('v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=366&sort_type=1&tms_region_type=1')
						.then((response) => {
							this.title = response.data.data.brotherClass;
							this.$nextTick(()=>{
								var mySwiper1 = new Swiper('#swiper-container1', {
									watchSlidesProgress: true,
									watchSlidesVisibility: true,
									observer: true,
									slidesPerView: 5
								})
							this.changeId(this.id);	
							})
						})
						.catch((error) => {
//							console.log(error);
						});
			
			
		}
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style/Header_lb.scss">

</style>