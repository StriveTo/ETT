<template>
<section>
	<header>
		<div class="header">
			<a class="back" href="javascript:history.go(-1)">
				<i class="iconfont icon-zuojiantou1"></i>
				<span>返回</span>
			</a>
			<div class="ipt-info">
	  			<div class="loupe">
	  				<i class="iconfont icon-search"></i>
	  			</div>
	  			<input @keyup="getValue()" v-model="keyWord" type="text" class="ipt" placeholder="新鲜水果、生鲜" value="" />
	  		</div>
			<a @click="gotoSlb()" href="javascript:;" class="key" >搜索</a>
			
		</div>
		<ul class="key-Ul" v-if="keyWord">
			<li v-for="item in list1">{{item}}</li>
		</ul>
	</header>
	<router-view />
</section>	
	
</template>

<script>
import axios from 'axios';

export default {
  name: 'headerSh',
  data () {
    return {
      	keyWord : "",
      	list1 : [],
      	list2 : ""
    }
  },
  methods:{
  	gotoIndex(){
  		this.$router.history.push({name:'index'});
  	},
  	getValue(){
  		this.keyWord = $(".ipt").val();
		axios.get("/v3/search/keyword?keyword=" + this.keyWord)
		.then((res) => {
//			console.log(this.keyWord);
//			console.log(res);
			this.$nextTick(function(){
				this.list1 = res.data.data;
			})
		})
  	},
  	gotoSlb(){
  		$(".key-Ul").css("display","none");
  		this.getValue();
 		axios.get(`/v3/search/product?keyword=${this.keyWord}&store_id_list=3&tms_region_type=1&page_size=50&curr_page=1`)
	  	.then((res) =>{
//			console.log(res);
//			console.log(this);
			this.list2 = res.data.data;
			console.log(this.list2);
			var that = this;
			this.$nextTick(function(){
				this.$router.history.push({name:'searchLb',params:{arr:that.list2}});
	  		})	
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
				color: #65a032;
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
}	
</style>
