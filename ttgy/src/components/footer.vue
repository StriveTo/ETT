<template>
	<footer>
		<div @click="gotoIndex()">
			<i class="iconfont icon-home"></i>
			<span>首页</span>
		</div>
		<div  @click="gotoLb1()">
			<i class="iconfont icon-fenlei1"></i>
			<span>分类</span>
		</div>
		<div>
			<i class="iconfont icon-gouwuche1"></i>
			<span>购物车</span>
		</div>
		<div @click="gotoLog()">
			<i class="iconfont icon-icongerenzhongxin"></i>
			<span>我的果园</span>
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
  },
  methods:{
  	gotoIndex(){
		this.$router.history.push({name:'index'});
		console.log(this);
		$("footer div:eq(0)").css("color","#65a032");
		$("footer div:eq(0)").siblings().css("color","#898989");
  	},
  	gotoLb1(){
  		this.$router.history.push({name:'lb1'});
  		$("footer div:eq(1)").css("color","#65a032");
  		$("footer div:eq(1)").siblings().css("color","#898989");
  	},
  	gotoLog(){
  		this.$router.history.push({name:'log'});
  		$("footer div:eq(3)").css("color","#65a032");
  		$("footer div:eq(3)").siblings().css("color","#898989");
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
			color: #898989;
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
