<template>
	<div class="Det">
    <div class="app-detail">
    <div class="dynamic-prop-table"><dl><dt>产地</dt><dd>智利</dd></dl><dl><dt>营养元素</dt><dd>花青素，铁，维生素A，胡萝卜素</dd></dl><dl><dt>储藏方法</dt><dd>0°及以上冷藏</dd></dl><dl><dt>甜度</dt><dd>13.4-17.7</dd></dl><dl><dt>果径</dt><dd>26-28mm</dd></dl></div>
   
    <img src="https://imgjd7.fruitday.com/up_images/20171220/15137566901540.jpg" _src="https://imgjd7.fruitday.com/up_images/20171220/15137566901540.jpg">
    <img src="https://imgjd7.fruitday.com/up_images/20171220/15137566901540.jpg" _src="https://imgjd7.fruitday.com/up_images/20171220/15137566901540.jpg">
    <img src="https://imgjd7.fruitday.com/up_images/20171220/15137566939343.jpg" _src="https://imgjd7.fruitday.com/up_images/20171220/15137566939343.jpg">
    <img src="https://imgjd7.fruitday.com/up_images/20171220/15137566951217.jpg" _src="https://imgjd7.fruitday.com/up_images/20171220/15137566951217.jpg">
    <img src="https://imgjd8.fruitday.com/up_images/20171220/1513762362174.jpg" _src="https://imgjd8.fruitday.com/up_images/20171220/1513762362174.jpg">
    </div>
	
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Evaluate",
  components: {

  },
  data: function() {
			return {
				pho:[]
			}
		},
  methods: {},
  mounted() {
    var id = this.$route.params.fid;
    console.log("fefte" + id);
    axios
      .get(
        `/v3/product/detail?store_id_list=3&product_id=${id}&store_id=&delivery_code=3`
      )
      .then((res) => {
        console.log(res);
        this.pho = res.data.templatePhoto;
        console.log(this.pho)
      });
  }
};
</script>

<style scoped lang="scss" src="./style/Det.scss">

</style>