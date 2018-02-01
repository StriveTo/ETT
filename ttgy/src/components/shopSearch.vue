<template>
	<section>
		<header>
			<div class="header">
				<div @click="gotoIndex()" class="back" href="javascript:;">
					<i class="iconfont icon-zuojiantou1"></i>
					<span>返回</span>
				</div>
				<div class="ipt-info">
		  			<div class="loupe">
		  				<i class="iconfont icon-search"></i>
		  			</div>
		  			<input @keyup="getValue()" v-model="keyWord" type="text" class="ipt" placeholder="新鲜水果、生鲜" value="" />
		  		</div>
				<a class="key" href="javascript:;">搜索</a>
				
			</div>
			<ul class="key-Ul" v-if="keyWord">
				<li v-for="item in list1">{{item}}</li>
			</ul>
		</header>
		<section class="hot">
			<div class="hotWord">
				<h2>热门搜索</h2>
				<ul>
					<li v-for="item in list">{{item}}</li>
				</ul>
			</div>
		</section>
	</section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'shopSearch',
  data () {
    return {
      	list : [],
      	keyWord : "",
      	list1 : []
    }
  },
  mounted(){
  	axios.get("/v3/search/get_hot_keyword")
  	.then((res) => {
//		console.log(res);
  		this.list = res.data.data;
  	})
  },
  methods:{
  	gotoIndex(){
  		this.$router.history.push({name:'index'});
  	},
  	getValue(){
  		this.keyWord = $(".ipt").val();
		axios.get("/v3/search/keyword?keyword=" + this.keyWord)
		.then((res) => {
			console.log(this.keyWord);
			console.log(res);
			this.list1 = res.data.data;
		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
	display: flex;
	flex-direction: column;
	height: 100%;
	header{
		position: relative;
		.header{
			height: 0.54rem;
			background: white;
			padding: 0.1rem 0;
			border-bottom: 1px solid #d8d8d8;
			display: flex;
			justify-content: space-between;
			color: #65a032;
			font-size: 14px;
			.back{
				line-height: 0.33rem;
				margin-right: 0.06rem;
			}
			.ipt-info{
				flex: 1;
				background: #eee;
				border-radius: 0.05rem;
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
			.key{
				font-size: 14px;
				color: #64a131;
				padding: 0.06rem;
			}
		}
		.key-Ul{
			position: absolute;
			top: 0.54rem;
			background: white;
			width: 100%;
			padding-left: 0.1rem;
			li{
				padding: 0.16rem 0;
			    border-bottom: 1px solid #eee;
			    color: #3a3a3a;
			    width: 100%;
			    font-weight: lighter;
			}
		}
	}
	.hot{
		background: white;
		flex: 1;
		padding: 0 0.1rem;
		.hotWord{
			margin-top: 0.2rem;
			h2{
				font-size: 14px;
				color: #878787;
			    font-weight: lighter;
			    margin-bottom: 0.05rem;
			}
			ul{
				display: flex;
				flex-wrap: wrap;
				/*justify-content: space-between;*/
				li{
					color: #3a3a3a;
				    padding: 0.07rem 0.08rem;
				    margin: 0.1rem 0.06rem 0;
				    background: #f1f1f1;
				    border-radius: 0.05rem;
				    max-width: 1.8rem;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				}
			}
		}
	}
}
	
</style>
