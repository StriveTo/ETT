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
				<ul>
					<li v-for="item in list">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div id="list_right">
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	import axios from "axios";
	export default{
		name : "lb1",
		data(){
			return {
				list:[],
				list1:[]
			}
		},
		mounted(){
			axios.get("/v3/product/category_list?store_id_list=3&class_id=")
			.then((res)=>{
				console.log(res);
				this.list = res.data.data.classOneGroup;
				console.log(this.list);
			})
		}
	}
</script>

<style lang="scss">
	@import "./css/lb1.scss";
</style>