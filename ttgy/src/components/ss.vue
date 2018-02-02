<template>
	<section>
		<div class="ss">
			<img :src="imgt.image"/>
		</div>
		<div class="swiper">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			      	<div class="swiper-slide" v-for="item in slideshow">
			      		<img :src="item.image"/>
			      		<div class="tag">
			      			<b>{{item.banner_tag}}</b>
			      		</div>
			      		<p>{{item.title}}</p>
			      		<div class="price">
			      			<span>￥{{item.price}}/<em>{{item.volume}}</em></span>
			      			<i class="iconfont icon-add"></i>
			      		</div>
			     	 </div>
			    </div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  	name: 'ss',
  	data: function() {
    return {
    		imgt:{},
    		slideshow : []
    	}
  	},
  	mounted() {
		axios.get("/v3/ad/homepage?connect_id=&type=2&lonlat=116.25198%2C40.116466&ad_code=110114&tab_id=")
  		.then((res) => {
//			console.log(res);
  			this.imgt = res.data.data.banner.mainBanners[18].content[0];
  			this.slideshow = res.data.data.banner.mainBanners[19].content;
//			console.log(this.imgt);
//			console.log(this.slideshow);
  			this.$nextTick(function(){
	  			 var swiper = new Swiper('.swiper-container', {
	  			 	slidesPerView : 'auto',
	  			 	
			    });
	  		})	
  		})
  	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/swiper.css';
	section{
		.ss{
			img{
				width: 100%;
			}
		}
		.swiper{
			.swiper-container {
			      width: 100%;
			      height: 100%;
			      background: white;
			    .swiper-slide{
			    	min-width: 1rem;
			    	max-width: 1.12rem;
			    	padding: 0.1rem 0.08rem 0.15rem;
			    	font-size: 14px;
			    	background: white;
			    	.tag{
		    		    position: absolute;
					    left: 0;
					    right: 0;
					    top: 1rem;
					    text-align: center;
					    b{
					    	position: relative;
						    border-radius: .03rem .03rem .03rem .03rem;
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    left: 0;
/*						    padding: .03rem .06rem;*/
						    color: #fff;
						    font-size: 0.09rem;
						    background-color: #ff8a65;
					    }
			    	}
			    	p{
			    		color: #3a3a3a;
			    		text-align: center;
			    		text-overflow: ellipsis;
			    		overflow: hidden;
			    		white-space: nowrap;
			    		margin-top: 0.12rem;
			    	}
			    	.price{
			    		position: relative;
			    		span{
			    			font-size: 12px;
			    			text-align: center;
			    			display: block;
						    color: #ff8000;
						    width: 100%;
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
			    		}
			    		i{
			    			position: absolute;
						    top: -0.09rem;
						    right: 0;
						    width: 0.74rem;
						    height: 0.4rem;
						    text-align: right;
						    line-height: 0.35rem;
						    font-size: 20px;
						    color: #ff8000;
			    		}
			    	}
			    	img{
						width: 0.96rem;
					}
			    }  
				
			}
		}
	}
</style>
