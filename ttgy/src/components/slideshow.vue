<template>
 	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="item in slideshow">
			    	<img :src="item.image" />
			   	</div>
			</div>
			<div class="swiper-pagination" >
					&nbsp;
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'

export default {
  	name: 'slide-show',
  	data: function() {
    return {
    	slideshow: []
    	}
  	},
  	mounted() {
  		axios.get("/v3/ad/homepage?connect_id=f1kfu0jn77q7qblifaod06hi70&type=0&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=")
  		.then((res) => {
  			console.log(res);
  			this.slideshow = res.data.data.banner.mainBanners[0].content;
  			console.log(this.slideshow);
  			this.$nextTick(function(){
	  			var mySwiper = new Swiper('.swiper-container', {
	  				pagination: {
						el: '.swiper-pagination',
						type: 'bullets'
					},
					autoplay: true,//可选选项，自动滑动
					loop: true
				})
	  		})	
  		})
  	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/swiper.css'
</style>
