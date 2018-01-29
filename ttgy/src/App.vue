<template>
  <div id="app">
  	<common-header></common-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
	html,body{
		height:100%;
	}
#app{
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
}
</style>
