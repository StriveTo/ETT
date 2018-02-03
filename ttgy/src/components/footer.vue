<template>
		<footer>
			<div>
				<router-link :to="{name:'index'}" active-class="green" exact>
					<i class="iconfont icon-home"></i>
					<span>首页</span>
				</router-link>
				<router-link :to="{name:'lb1'}" active-class="green">
					<i class="iconfont icon-fenlei1"></i>
					<span>分类</span>
				</router-link>
				<router-link :to="{name:'Cart'}" active-class="green">
					<i class="iconfont icon-gouwuche1"></i>
					<span>购物车</span>
				</router-link>
				<router-link :to="{name:'user'}" active-class="green">
					<i class="iconfont icon-icongerenzhongxin"></i>
					<span>我的果园</span>
				</router-link>
			</div>
			
		</footer>
	
</template>

<script>
import $ from 'jquery'
export default {
  name: 'common-footer',
  data () {
    return {
      	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
footer{
	height: 0.42rem;
	position: fixed;
	width: 100%;
	z-index: 1000;
	bottom: 0;
	div{
		box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
		background: white;
		font-size: 12px;
		color: #898989;
		display: flex;
		justify-content: space-around;
		padding-top: 0.03rem;
		a{
			display: block;
			display: flex;
			flex-direction: column;
			text-align: center;
			color: #898989;
			flex: 1;
			i{
				font-size: 20px !important;
			}
			
		}
		.green{
			display: block;
			display: flex;
			flex-direction: column;
			text-align: center;
			color: #65a032;
			flex: 1;
			i{
				font-size: 20px !important;
			}
		}
		
	}
}
	
</style>
