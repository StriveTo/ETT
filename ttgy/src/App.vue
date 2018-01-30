<template>
  <div id="app">

    <router-view/>
    <common-footer></common-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
	@import "./assets/css/reset.css";
	@import "iconfont/iconfont.css";
	@import './assets/css/common.css';
	@import './assets/css/iconfont/iconfont.css';
	#app{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
	}
</style>

