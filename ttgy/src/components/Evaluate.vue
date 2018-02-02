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
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Evaluate",
		components: {

		},
		methods: {
				
			},
			mounted () {
				var id = this.$route.params.fid;
					console.log("fefte"+id)
					axios.get(`/v3/comment/list_by_product_id?product_id=${id}&curr_page=1&num_per_page=20&limit=20&show=1`)
					.then((res) => {
							// console.log(res);
					});
				
			}
		}
</script>

<style scoped lang="scss" src="./style/Evaluate.scss">

</style>