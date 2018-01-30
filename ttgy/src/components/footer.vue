<template>
	<footer>
		<div>
			<i class="iconfont icon-home"></i>
			<span>首页</span>
		</div>
		<div>
			<i class="iconfont icon-fenlei1"></i>
			<span>分类</span>
		</div>
		<div>
			<i class="iconfont icon-gouwuche1"></i>
			<span>购物车</span>
		</div>
		<div>
			<i class="iconfont icon-icongerenzhongxin"></i>
			<span>我的果园</span>
		</div>
	</footer>
</template>

<script>
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
		box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
		background: white;
		font-size: 12px;
		color: #898989;
		display: flex;
		justify-content: space-around;
		padding-top: 0.03rem;
		div{
			display: flex;
			flex-direction: column;
			text-align: center;
			flex: 1;
			i{
				font-size: 20px !important;
			}
			
		}
		div:first-of-type{
			color: #65a032;
		}
	}
</style>
