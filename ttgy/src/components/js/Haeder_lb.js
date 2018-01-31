	import axios from 'axios'
	import Swiper from 'swiper'
	import $ from 'jquery'
	export default {
		name: 'Haeder_lb',
		data() {
			return {
				list: [],
				title:[],
				id:0
			}
		},
		methods: {
			changeName(name, id){
				this.list = null;
//				this.$store.dispatch("setUserName", name)
//				this.$router.history.push({name:'List', params:{fid: id}})
//				console.log(id)
				this.changeId(id)
			},
			changeId(id){
//				console.log(id)
						axios.get('/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id='+ id +'&sort_type=1&tms_region_type=1')
						.then((response) => {
							console.log(response);
							this.list = response.data.data.productGroup;
							this.title = response.data.data.brotherClass;
						})
						.catch((error) => {
							console.log(error);
						});
			},
			gotoDetail(ad) {
			console.log(this);
			this.$router .history.push({name:'Detail', params:{fid: ad}});
		}
		},
		mounted() {
			axios.get('v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=366&sort_type=1&tms_region_type=1')
						.then((response) => {
							this.title = response.data.data.brotherClass;
							this.$nextTick(()=>{
								var mySwiper1 = new Swiper('#swiper-container1', {
									watchSlidesProgress: true,
									watchSlidesVisibility: true,
									observer: true,
									slidesPerView: 5
								})
							this.changeId(this.id);	
							})
						})
						.catch((error) => {
							console.log(error);
						});
			
			
		}
		
	}