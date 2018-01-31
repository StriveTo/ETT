<template>
	<section>
		<div class="rqtj">
			<img :src="imgt.image"/>
		</div>
		<ul class="list">
			<li v-for="item in list">
				<img :src="item.image"/>
				<div class="shop-info">
					<h2>{{item.title}}</h2>
					<p>{{item.subtitle}}</p>
					<span>￥{{item.price}}/<em>{{item.volume}}</em></span>
					<i class="iconfont icon-add"></i>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
import axios from 'axios'
export default {
  	name: 'rqtj',
  	data: function() {
    return {
    		imgt:{},
    		list : []
    	}
  	},
  	mounted() {
		axios.get("/v3/ad/homepage?connect_id=f1kfu0jn77q7qblifaod06hi70&type=0&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=")
  		.then((res) => {
//			console.log(res);
  			this.imgt = res.data.data.banner.mainBanners[20].content[0];
  			this.list = res.data.data.banner.mainBanners[21].content;	
  		})
  	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/swiper.css';
	section{
		.rqtj{
			margin-top: 0.1rem;
			img{
				width: 100%;
			}
		}
		.list{
			width: 100%;
			display: flex;
			flex-direction: column;
			background: white;
			li{
				width: 100%;
				height: 1.6rem;
				padding: 0 0.12rem 0 0.25rem;
				display: flex;
				justify-content: space-between;
				img{
					width: 1.2rem;
					height: 1.2rem;
					margin-top: 0.2rem;
				}
				.shop-info{
					flex: 1;
					margin-left: 0.25rem;
					position: relative;
					padding-top: 0.27rem;
					h2{
						max-width: 1.93rem;
						font-size: 17px;
						color: #3A3A3A;
						font-weight: 400;
						margin-bottom: 0.05rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					p{
						font-size: 14px;
						color: #878787;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						margin-bottom: 0.37rem;
					}
					span{
						display: block;
						font-size: 16px;
					    color: #ff8000;
					    width: 100%;
					    white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    em{
					    	font-size: 12px;
					    }
					}
					i{
					    position: absolute;
						bottom: 0.3rem;
						right: 0;
						width: 0.24rem;
						height: 0.24rem;
						border: 1px solid #ccc;
						text-align: center;
						line-height: 0.24rem;
						border-radius: 0.12rem;
						font-size: 24px;
						color: #ff8000;
					}
				}
			}
		}
	}
</style>
