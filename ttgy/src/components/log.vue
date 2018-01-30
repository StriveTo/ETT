<template>
	<div id="log">
		<div class="log_header">
			<i class="iconfont icon">&#xe6e3;</i>
			<span>手机号快捷登录</span>
		</div>
		<div class="log_min">
			<div class="user"> 
				<b class="iconfont icon-icongerenzhongxin"></b>
				<input type="text" placeholder="手机号" name="phone" maxlength="13" id="phone"/>
				<i>X</i>
				<span>获取验证码</span>
			</div>
			<div class="user"> 
				<b class="iconfont icon-duigou"></b>
				<input type="text" name="code" id="code" maxlength="6" placeholder="验证码" />
				<i>X</i>
			</div>
			<p>首次用手机号登录将自动为您注册，并有好礼相送</p>
			<button>登录</button>
			<h3><a class="logType" @click="changeLog()" >账号密码登录</a>	<a href="" class="noCode">未收到验证码?</a></h3>
		</div>
		
		<div class="log_min2">
			<div class="user"> 
				<b class="iconfont icon-icongerenzhongxin"></b>
				<input type="text" placeholder="手机号" name="user" maxlength="13" id="user"/>
				<i>X</i>
			</div>
			<div class="user"> 
				<b class="iconfont icon-duigou"></b>
				<input type="text" name="code" id="code" maxlength="6" placeholder="密码" />
				<i>X</i>
			</div>
			<button>登录</button>
			<h3><a class="logType" @click="changeLog1()">手机快捷登录</a>	<a href="" class="noCode">找回密码?</a></h3>
		</div>
		
	</div>
	
	
</template>

<script>
	import $ from "jquery"
	import axios from "axios"
	export default{
		name:"log",
		methods:{
			changeLog:function(){
				$(".log_min").css("right","100%");
				$(".log_min2").css("right","0");
				$(".log_header span").html("账户密码登录")
			},
			changeLog1:function(){
				$(".log_min").css("right","0");
				$(".log_min2").css("right","-100%");
				$(".log_header span").html("手机号快捷登录")
			}
		}
	}
	
	
	
	
	
	
</script>

<style lang="scss">
	@import "../assets/css/log.scss";
</style>