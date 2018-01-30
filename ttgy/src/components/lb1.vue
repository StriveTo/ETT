<template>
	<div id="box">
		<div id="header">
			<div>
				<i class="iconfont icon-search"></i>
				<span>奇异果</span>
			</div>
		</div>
		<div id="footer">
			<div class="list_left">
				<ul >
					<li v-for="item in list"  >
						{{item.name}}
					</li>
				</ul>
			</div>
			<listRight></listRight>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	import axios from "axios";
	import listRight from "./lb1rig";
	export default{
		name : "lb1",
		components:{
			"listRight" : listRight	
		},
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			axios.get("/v3/product/category_list?store_id_list=3&class_id=")
			.then((res)=>{ 
				this.list = res.data.data.classOneGroup;
			});
			this.$nextTick(function(){
			setTimeout(function(){
				$(".list_left ul li").click(function(){
					$(this).css({
						'border-left': '0.02rem solid #65a032',
					    'color': '#65a032',
					    'background': '#fff'
						})
					$(this).siblings().css({
						'border-left': 'none',
					    'color': '#3a3a3a',
					    'background': '#f5f5f5'
					})
				});
			},1000)
			});
		},
		methods:{	
			

		}
	}
</script>

<style lang="scss">
	@import "./css/lb1.scss";
</style>