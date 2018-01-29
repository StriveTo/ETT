<template>
	<div class="Header">
		<article>
			<header>
				<!--头部-->
				<nav>
					<div class="back">
						<a href="javascript:history.go(-1)" class="iconfont icon-zuojiantou1"></a>
					</div>
					<div class="text">果园优选</div>
					<a href="javascript:void(0);" class="next"><i class="iconfont icon-search"></i></a>
				</nav>
			</header>
			<div class="swiper-container" id="swiper-container2" style="width:480px;">
				<div class="swiper-wrapper">
					<div style="padding-top:0.08rem!important;text-align: center;" class="swiper-slide active-nav" v-for="item in msg">
						{{item}}
					</div>
				</div>
			</div>
			<div id="sort">
				<ul class="sort" data-index="0">
					<li class="active">综合</li>
					<li class="">销量</li>
					<li class="">价格<em class="sort-price "></em></li>
				</ul>
			</div>
		</article>
		<section>
			<div class="swiper-container" id="swiper-container3" style="width:480px;">
				<div class="swiper-wrapper">
					<div class="swiper-slide blue-slide">
						slider1</div>
					<div class="swiper-slide red-slide">
						slider2</div>
					<div class="swiper-slide orange-slide">
						slider3</div>
					<div class="swiper-slide blue-slide">
						slider4</div>
					<div class="swiper-slide red-slide">
						slider5</div>
					<div class="swiper-slide orange-slide">
						slider6</div>
					<div class="swiper-slide blue-slide">
						slider7</div>
					<div class="swiper-slide red-slide">
						slider8</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	import axios from 'axios'
	import Swiper from 'swiper'
	import $ from 'jquery'

	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: ['全部', '樱桃', '奇异果', '苹果', '橙柑橘柚', '蓝莓/莓类', '牛油果', '冷冻虾类', '牛排', '牛肉类', '根茎类']
			}
		},
		mounted() {
			var mySwiper2 = new Swiper('#swiper-container2', {
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				slidesPerView: 5,
				on: {
					tap: function() {
						mySwiper3.slideTo(mySwiper2.clickedIndex)
					}
				}
			})
			var mySwiper3 = new Swiper('#swiper-container3', {

				on: {
					slideChangeTransitionStart: function() {
						updateNavPosition()
					}
				}

			})

			function updateNavPosition() {
				$('#swiper-container2 .active-nav').removeClass('active-nav')
				var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');

				if(!activeNav.hasClass('swiper-slide-visible')) {
					console.log(1);
					if(activeNav.index() > mySwiper2.activeIndex) {
						console.log(2);
						var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
						mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
					} else {
						console.log(3);
						mySwiper2.slideTo(activeNav.index())
					}
				}
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.Header {
		height: 100%;
		article {
			width: 100%;
			position: fixed;
			z-index: 9999;
			background: rgba(248, 248, 248, .95);
		}
		header {
			nav {
				background: rgba(248, 248, 248, .95);
				height: 0.45rem;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				align-items: center;
				text-align: center;
				border-bottom: .01rem solid #d8d8d8;
				a {
					color: #75a739;
					display: inline-block;
				}
				.back a {
					font-size: 22px;
					padding: 0.1rem;
				}
				.text {
					color: #75a739;
					font-size: 17px;
				}
				.next {
					i {
						font-size: 22px;
						padding: 0.1rem;
					}
				}
			}
		}
		.sort {
			height: 0.36rem;
			line-height: 0.36rem;
			display: flex;
			justify-content: space-around;
			background: rgba(248, 248, 248, .95);
		}
		section {
			height: 100%;
			overflow-y: auto;
			margin-top: 1.17rem;
			.swiper-wrapper {
				height: 0.36rem;
				display: flex;
			}
			#swiper-container3 {
				height: 100%;
				background: red;
				overflow: hidden;
			}
		}
		#swiper-container2 .swiper-slide {
			line-height: 2 !important;
			/*color: #666 !important;*/
			font-size: 14px !important;
			background: #eee !important;
		}
		#swiper-container2 .active-nav {
			background: #ddd !important;
		}
	}
</style>