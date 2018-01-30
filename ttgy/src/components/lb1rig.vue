<template>
	<div class="list_right">
		<a class="more iconfont" href="#">全部&#xe6e1;</a>
		<ul>
			<li>
				<h3>{{this.list1[0].class2Name.name}}</h3>
					<dl v-for="item in list1[0].class3Group">
						<a href="#">
							<dt><img :src="item.class_photo"/></dt>
							<dd>{{item.name}}</dd>
						</a>
					</dl>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from "jquery";
	import axios from "axios";
	export default{
		name:"listRight",
		data(){
			return {
				list1:[]
			}
		},
		mounted(){
			axios.get("/v3/product/category_list?store_id_list=3&class_id=")
			.then((res)=>{ 
				this.list1 = res.data.data.childrenList;
				console.log(this.list1[0].class2Name)
			});
		}
	}
</script>

<style>
</style>