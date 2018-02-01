<template>
	<ul>
		<li v-for="item in lb">
			<div class="goods-info">
				<img :src="item.photo"/>
				<div class="goods">
					<h2>{{item.product_name}}</h2>
					<p>{{item.product_desc}}</p>
					<p>{{item.volume}}</p>
					<div class="price">
						<span>￥{{item.price}}</span>
						<em>明日达</em>
					</div>
					<i class="iconfont icon-jiahao"></i>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
		name: 'searchLb',
		data(){
			return{
				lb: null
			}
		},
		mounted(){
//			console.log(this);
			this.lb = this.$route.params.arr;
			
		}
	}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	ul{
		flex: 1;
		background: white;
		display: flex;
		flex-direction: column;
		overflow: auto;
		li{
			height: 1.26rem;
			.goods-info{
				display: flex;
				padding: 0.1rem;
			    position: relative;
			    border-bottom: 0.01rem solid #d8d8d8;
			    color: #3a3a3a;
			    img{
			    	width: 1.05rem;
			    	height: 1.05rem;
			    	margin-right: 0.1rem;
	    			border-radius: 0.04rem;
			    }
			    .goods{
			    	h2{
			    		font-size: 14px;
			    		color: #3A3A3A;
			    		
			    	}
			    	p{
			    		height: 0.2rem;
					    font-size: 12px;
					    color: #878787;
					    white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
			    	}
			    	p:last-of-type{
			    		margin-top: 0.2rem;
			    	}
			    	.price{
			    		color: #ff8000;
			    		display: flex;
			    		span{
			    			font-size: 18px;
			    		}
			    		em{
			    			display: block;
			    			border-radius: 0.02rem;
							padding: 0.02rem 0.02rem;
							margin-left: 0.08rem;
							color: #fff;
							background: #FF8000;
			    		}
			    	}
			    	i{
			    		position: absolute;
			    		bottom: 0.12rem;
			    		right: 0.16rem;
			    		color: #ff7e05;
			    		font-size: 25px !important;
			    	}
			    }
			}
		}
	}
</style>