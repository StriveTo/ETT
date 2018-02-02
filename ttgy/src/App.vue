<template>
  <div id="app">
<<<<<<< HEAD
				<router-view/>
=======
		<keep-alive>
				<router-view/>
		</keep-alive>
>>>>>>> 75c1511720f809ca0ab1c29eaaf26818311714f6
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

