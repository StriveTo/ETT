<template>
	<div id="partp">
		
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Partp",
		components: {

		},
		mounted() {
			console.log(this);

			var id = this.$route.params.fid;
			axios.get(`/v3/comment/rate_and_comment?product_id=${id}`)
				.then((res) => {

				})
		}
	};
</script>

<style scoped lang="scss" src="./style/particulars.scss">

</style>