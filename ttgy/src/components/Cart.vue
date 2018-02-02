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
		<section class="container cart">
			<div id="address-con">
				<a href="javascript:;" class="section address hasaddress">
					<div class="specific"> <i class="iconfont icon-location"></i>
						<div class="infor"> 添加地址 </div> <i class="iconfont icon-arrow-right"></i> </div>
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
				<li class="" data-item-id="9461_normal_0_0">
					<i class="iconfont " id="ic"></i>
					<a href="./good-detail.html?product_id=9461">
						<div class="pro-img">
							<span id="xs">限时特惠</span>
							<img style="width:90px;height:90px" src="https://imgjd3.fruitday.com/images/product_pic/492/1/1-370x370-492-U4S95D5U.jpg">
						</div>
						<div class="pro-info">
							<h3>阿根廷红虾（巨无霸 L1级）</h3>
							<h4>  </h4>
							<h5><span>2000g</span>2.00kg</h5>
							<p>
								<span class="price">
									<small>￥</small>
									<em>159</em>
									<small></small>
								</span>
								<span class="tag" style="background: #FF8000"> 明日达   </span>
								<div class="count">
									<span class="minus">
									<i class="iconfont icon-subtract"></i>
								</span>
									<span class="num">1</span>
									<span class="plus">
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
		<footer class="base-nav" id="cart-nav">
			<span id="select_all">
				<i class="iconfont icon-duihao-copy">
				</i>全选</span>
			<div class="info">
				<div class="total">合计：<small>￥</small><em>159</em>
					<small></small>
				</div>
				<!--<div class="empty hide">
					<span>清空购物车</span>
				</div>-->

			</div>
			<a class="account" href="javascript:;">结算 </a>
			<!--<span class="delete hide">删除</span>-->
		</footer>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Cart",
		components: {
			 
		},
		mounted () {
				var id = this.$route.params.fid;
					console.log("fefte"+id)
					axios.get(`/v3/product/detail?store_id_list=3&product_id=${id}&store_id=&delivery_code=3`)
					.then((res) => {
							// console.log(res);
					});
				
			}
	};
</script>

<style scoped lang="scss" src="./style/Cart.scss">

</style>