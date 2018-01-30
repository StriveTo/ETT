import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	username: "卖座电影",
	title: []
}

//持久化 : 从本地取出数据
if(localStorage.getItem("data")) {
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}

function saveTolocal(state) {
	//持久化保存数据
	localStorage.setItem("data", JSON.stringify(state))
}

const mutations = {
	setUserName(state, username) {
		state.username = username;
		saveTolocal(state);
	},
	addToName (state, name_info) {
		state.title.push(name_info);
		//持久化保存数据
		saveTolocal(state);
	}
}

const actions = {
	setUserName({commit}, username) {
		commit("setUserName", username)
	},
	addToName: function({commit}, name_info) {
		commit("addToCart", name_info);
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
