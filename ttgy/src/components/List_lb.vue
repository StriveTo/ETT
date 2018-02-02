<template>
<div class="ap">
    <article>
			<header>
				<!--头部-->
				<nav>
					<div class="back">
							<a href="javascript:history.go(-1)" class="iconfont icon-zuojiantou1"></a>
					</div>
					<ul class="tab-menu">
						<li class="active" @click="GoTosShop()">商品</li>
						<li @click="GoToDet()">详情</li>
						<li @click="GoToEval()">评价</li>
					</ul>
					<a href="javascript:void(0);" class="next"><i class="iconfont icon-search"></i></a>
				</nav>
			</header>
		</article>
   <router-view/>
</div>
      
</template>

<script>
export default {
  name: 'List_lb',
  components: {
  },
  methods:{
      GoToEval(){
					console.log("测试")
					// this.$store.dispatch("setUserName", name)
                    // console.log(name)
                    console.log("fd" + this.$route.params.fid)
                    var id = this.$route.params.fid;
                    
					this.$router.history.push({name:'Evaluate', params:{fid: id}})
    },
     GoTosShop(){
					console.log("测试")
					// this.$store.dispatch("setUserName", name)
                    // console.log(name)
                    console.log("fd" + this.$route.params.fid)
                    var id = this.$route.params.fid;
                    
					this.$router.history.push({name:'Details', params:{fid: id}})
	},
     GoToDet(){
					console.log("测试")
					// this.$store.dispatch("setUserName", name)
                    // console.log(name)
                    console.log("fd" + this.$route.params.fid)
                    var id = this.$route.params.fid;
					this.$router.history.push({name:'Det', params:{fid: id}})
	}
  }
}
</script>


<style scoped lang="scss">

.ap{
    height:100%;
}
 header {
           width: 100%;
           backface-visibility: red;
           position: fixed;
           top:0;
           z-index: 999;
           nav {
               background: rgba(248, 248, 248, .95);
               height: 0.45rem;
               display: flex;
               justify-content: space-between;
               box-sizing: border-box;
               align-items: center;
               text-align: center;
               border-bottom: .01rem solid #d8d8d8;
               .tab-menu {
                   display: flex;
                   font-size: 16px;
                   font-weight: 300;
                   color: #3a3a3a;
                   li {
                       margin: 0 .06rem;
                       height: .43rem;
                       line-height: .45rem;
                       display: inline-block;
                   }
               }
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
</style>
