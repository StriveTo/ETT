<template>
	<header>
		<section>
	  	<div class="local">
	  		<img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png"/>
	  		<span class="location"></span>
	  		<i class="iconfont icon-sanjiaodown"></i>
	  	</div>
	  	<i class="iconfont icon-search" style="font-size: 21px;line-height: 14px;"></i>
	  </section>
	</header>
  
</template>

<script>
import $ from 'jquery'

$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(){
	 $(".location").html(remote_ip_info.city);
});
export default {
  name: 'common-header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
	section{
		height: 0.38rem;
		display: flex;
		padding: 0.12rem 0.16rem;
		background: white;
		justify-content: space-between;
		box-shadow: 0 0.03rem 0.03rem 0 rgba(0,0,0,.15);
		.local{
			display: flex;
			font-size: 14px;
			color: #65a032;
			line-height: 14px;
			img{
					height: 0.14rem;
					margin-right: 0.05rem;
			}
		}	
	}
}
</style>
