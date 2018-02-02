<template>
	<section>
		<div class="bannerN">
			<div v-for="item in banner" @click="gosub()">
				<img :src="item.image"/>
			</div>
		</div>
		<div class="banner1">
			<img :src="banner1.image"/>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'

export default {
  	name: 'bannern',
  	data: function() {
    return {
    		banner : [],
    		banner1 : {}
    	}
  	},
  	mounted() {
  		axios.get("/v3/ad/homepage?connect_id=&type=2&lonlat=116.25198%2C40.116466&ad_code=110114&tab_id=")
  		.then((res) => {
//			console.log(res);
  			this.banner = res.data.data.banner.mainBanners[2].content;
  			this.banner1 = res.data.data.banner.mainBanners[4].content[0];
//			console.log(this.banner);
//			console.log(this.banner1);
  		})
  	},
  	methods:{
  		gosub(){
  			
  		}
  	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
	display: flex;
	flex-direction: column;
	.bannerN{
		background: white;
		padding-bottom: 0.2rem;
		display: flex;
		div{
			width: 50%;
			padding: 0.1rem 0.025rem 0;
			img{
				width: 100%;
			}
		}
	}
	.banner1 img{
		width: 100%;
	}
}
</style>
