<template>
  	<section>
		<common-header></common-header>
		<main>
			<slide-show></slide-show>
			<bannern></bannern>
			<gyrm></gyrm>
			<xpcx></xpcx>
			<jxzt></jxzt>
			<shxw></shxw>
			<pzrl></pzrl>
			<ss></ss>
			<rqtj></rqtj>
		</main>
		<common-footer></common-footer>
  	</section>
</template>

<script>
import header from './header';
import slideshow from './slideshow';
import bannern from './bannern';
import gyrm from './gyrm';
import xpcx from './xpcx';
import jxzt from './jxzt';
import shxw from './shxw';
import pzrl from './pzrl';
import ss from './ss';
import rqtj from './rqtj';
import footer from './footer';

export default {
  name: 'index',
  components: {
  	"common-header": header,
  	"slide-show" : slideshow,
  	"bannern" : bannern,
  	"gyrm" : gyrm,
  	"xpcx" : xpcx,
  	"jxzt" : jxzt,
  	"shxw" : shxw,
  	"pzrl" : pzrl,
  	"ss"   : ss,
  	"rqtj" : rqtj,
  	"common-footer" : footer
  },
  data: function(){
		return {
			
		}
	}
}
</script>

<style scoped lang="scss">
section{
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-bottom: 0.04rem;
	main{
		flex: 1;
		overflow: auto;
		margin-top: 0.04rem;
	}
}
		
		
		
</style>
