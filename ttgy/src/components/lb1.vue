<template>
	<div id="box">
		<div id="header">
			<div @click="goSearch">
				<i class="iconfont icon-search"></i>
				<span>奇异果</span>
			</div>
		</div>
		<div id="footer">
			<div class="list_left">
				<ul >
					<li v-for="item in list" @click="changePage(item.id)" >
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="list_right">
				<a class="more iconfont" href="#">全部&#xe6e1;</a>
				<ul>
					<li>
						<h3>{{list1.name}}</h3>
							<dl v-for="item in list2">
								<a href="#">
									<dt><img :src="item.class_photo"/></dt>
									<dd>{{item.name}}</dd>
								</a>
							</dl>
					</li>
				</ul>
			</div>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import $ from "jquery";
	import axios from "axios";
	import footer from "./footer";
	export default{
		name : "lb1",
		components:{
			"common-footer":footer
		},
		data(){
			return {
				list:[],
				list1:[],
				list2:[]
			}
		},
		mounted(){
			axios.get("/v3/product/category_list?store_id_list=3&class_id=")
			.then((res)=>{ 
				this.list = res.data.data.classOneGroup;
				this.list1 = res.data.data.childrenList[0].class2Name;
				this.list2 = res.data.data.childrenList[0].class3Group;
				console.log(this.list1)
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
			changePage(id){
				axios.get("/v3/product/category_list?store_id_list=3&class_id="+id)
				.then((res)=>{ 
					this.list1 = res.data.data.childrenList[0].class2Name;
					this.list2 = res.data.data.childrenList[0].class3Group;
//					console.log(this.list1)
				});
			},
			goSearch:function(){
				var that = this;
				that.$router.history.push({name:"shopSearch"});
			}	
		}
	}
</script>

<style lang="scss">
	@import "../assets/css/lb1.scss";
</style>