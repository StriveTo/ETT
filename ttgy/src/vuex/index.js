import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//state是一个变量,刷新数据清空
var state = {
	count: 0,   //购物车数量
	cart: []    //购物车商品详情 
}

//持久化：从本地取出数据
if (localStorage.getItem("data")) {
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}
function saveTolocal(state) {
	//持久化：保存数据
	localStorage.setItem("data", JSON.stringify(state));
}
const mutations = {
	changeCount(state, count) {
		state.count = count;
	},
	addToCart: function (state, goods_info) {
		state.cart = goods_info;
		// 持久化：保存数据
		saveTolocal(state);
	}
}

const actions = {
	changeCount: function ({ commit }, count) {
		commit("changeCount", count);
	},
	addToCart: function ({ commit }, goods_info) {
		commit("addToCart", goods_info);
	}
}
//暴露接口
export default new Vuex.Store({
	state,
	mutations,
	actions
})

