<template>
	<section class="hot">
		<div class="hotWord">
			<h2>热门搜索</h2>
			<ul>
				<li v-for="item in list">{{item}}</li>
			</ul>
		</div>
	</section>
</template>

<script>

import axios from 'axios';
export default {
  name: 'shopSearch',
  data () {
    return {
      	list : []
    }
  },
  mounted(){
//	console.log("shopSearch");
  	axios.get("/v3/search/get_hot_keyword")
  	.then((res) => {
//		console.log(res);
  		this.list = res.data.data;
  	})
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	
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
	
</style>
