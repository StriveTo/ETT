<template>
	<div id="good-comment" class="tab-box comment">
		<div id="good-comment-star">
			<dl class="comment-level-item">
				<dt>
					<span>96%</span><span>好评</span>
				</dt>
				<dd>
					<div> 
						<span class="pull-left">口感</span>
						<!-- <img src="../content/images/main/lighting_star@3x-cedc664b96.png" alt=""> -->
					</div>
					<div> 
						<span class="pull-left">颜值</span>
						<!-- <img src="../content/images/main/half_star@3x-f43e6f0b42.png" alt=""> -->
					</div>
				</dd>
			</dl>
			<div class="comment-tab-menu"> <ul> <li class="active">评价 46511</li> </ul> </div>
			<div class="comment-item" id="first-comment">
			<div class="comment-total"><span class="pull-right"><small class="orange">96%</small>好评<i class="iconfont icon-morehome"></i></span>评价(1055)</div>
			<div class="comment-con-chief" v-for="item in part">
				<div class="comment-info"> <img class="avatar" :src="item.userface">
					<div><span class="user">{{item.user_name}}</span> <i class="iconfont icon-v_mini5"></i></div><span class="date">2018-01-29</span> </div>
					<div class="comment-level"><span>口感 {{item.star_eat}}</span><span>颜值 {{item.star_show}}</span></div>
					<div class="comment-msg">{{item.content}}</div>
					<div class="comment-img">
						 <img :src="item.images[0]">
						 <img :src="item.images[1]">
					</div>
					<!-- <div style="height:100px;"> {{item.userface}} </div> -->
			</div>
			<div class="text-center"><span class="comment-view">查看全部评论</span></div>
		</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Evaluate",
		components: {

		},
		data: function(){
			return{
				part:[]
			}
		},
		methods: {
				
			},
			mounted () {
				var id = this.$route.params.fid;
					console.log("fefte"+id)
					axios.get(`/v3/comment/rate_and_comment?product_id=${id}`)
					.then((res) => {
							// console.log(res);
							this.part = res.data.data.data;
							this.po = res.data.data
					});
				
			}
		}
</script>

<style scoped lang="scss" src="./style/Evaluate.scss">

</style>