<template>
	<section>
		<header>
			<a @click="gotoIndex()" class="back" href="javascript:;">
				<i class="iconfont icon-zuojiantou1"></i>
			</a>
			<div class="title">
				选择收货地址
			</div>
			<a class="add-address" href="javascript:;">新增地址</a>
		</header>
	  	<div class="search">
	  		<div class="search-info">
	  			<div class="city">
		  			<span>上海</span>
		  			<i class="iconfont icon-sanjiaodown"></i>
		  		</div>
		  		<div class="ipt-info">
		  			<div class="loupe">
		  				<i class="iconfont icon-search"></i>
		  			</div>
		  			<input type="text" class="ipt" placeholder="请输入收货地址" value="" />
		  		</div>
	  		</div>
	  	</div>
	  	<div class="current">
	  		<h2>当前地址</h2>
	  		<div class="address">
	  			<p>北京市昌平区沙河镇沙河二毛生活小区北京科技职业学院</p>
	  			<span><i class="iconfont icon-msnui-foresight"></i>重新定位</span>
	  		</div>
	  	</div>
	  	<div class="my-near">
	  		<h2>我的收货地址</h2>
	  		<div class="my-address">
	  			
	  		</div>
	  		<h2>附近地址</h2>
	  		<div class="near-address">
	  			<p>山西面师傅</p>
	  			<p>川香居</p>
	  			<p>转角时光饮品店</p>
	  			<p>穆斯林美食</p>
	  			<p>好适口(巩华新村店)</p>
	  			<p>筷吙麻辣烫(科技职业学院店)</p>
	  			<p>京之味酱肉铺</p>
	  			<div class="more">
	  				<p><span>更多地址</span><i class="iconfont icon-arrow-right"></i></p>
	  			</div>
	  		</div>
	  	</div>
	</section>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      
    }
  },
  methods:{
  	gotoIndex(){
  		this.$router.history.push({name:'index'});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
	header{
		height: 0.43rem;
		background: white;
		padding: 0 0.08rem;
		display: flex;
		justify-content: space-between;
		color: #65a032;
		line-height: 0.43rem;
		.back{
			width: 0.4rem;
			color: #65a032;
			i{
				font-size: 25px !important;
			}
		}
		.title{
			width: 1.8rem;
			text-align: center;
			font-size: 18px;
		}
		.add-address{
			color: #65a032;
			font-size: 14px;
		}
	}
	.search{
		padding: 0 0.1rem 0.1rem;
		display: flex;
		height: 0.43rem;
		background: white;
		.search-info{
			width: 100%;
			height: 0.33rem;
			border-radius: 0.05rem;
			background: #F5F5F5;
			display: flex;
			.city{
				width: 0.8rem;
				color: #3A3A3A;
				font-size: 16px;
				text-align: center;
			    height: 0.33rem;
			    line-height: 0.33rem;
			    border-right: 1px solid #dcdcdc;
			}
			.ipt-info{
				flex: 1;
				display: flex;
				.loupe{
					width: 0.33rem;
					text-align: center;
					line-height: 0.33rem;
					i{
						font-size: 18px !important;
					}
				}
				.ipt{
					border: 0;
					background: none;
					outline: none;
				}
			}
		}
		
	}
	.current{
		h2{
			font-weight: 400;
		    background-color: #f5f5f5;
		    color: #878787;
		    padding: 0.12rem;
		    font-size: 12px;
		}
		.address{
			height: 0.5rem;
			background: white;
			line-height: 0.5rem;
			display: flex;
			padding: 0 0.1rem;
			justify-content: space-between;
			p{
				flex: 1;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			span{
				min-width: 0.8rem;
			    color: #ff8000;
			    text-align: right;
			    padding-left: 0.1rem;
			}
		}
	}
	.my-near{
		h2{
			font-weight: 400;
		    background-color: #f5f5f5;
		    color: #878787;
		    padding: 0.12rem;
		    font-size: 12px;
		}
		.near-address{
			font-size: 14px;
			p{
				display: flex;
				padding: 0.15rem 0.1rem;
				background: white;
				border-bottom: 1px solid #F5F5F5;
				justify-content: space-between;
				i{
					font-size: 14px !important;
					color: #aaa;
				}
			}
		}
	}
}
	
</style>
