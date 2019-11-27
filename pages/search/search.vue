<template>
	<view class="page">
		<view class="search-bar">
			<image src="../../static/tabBarIcon/search.png" class="search-icon"></image>
			<input type="text" value="" placeholder="搜索预告" maxlength="10"
			confirm-type="search"
			class="search-text"
			@confirm="search"
			/>
		</view>
		<view class="page-block search-content">
			<image src="https://s2.ax1x.com/2019/11/24/MLRPHS.png" class="search-img"
			:data-trailerid="1" @click="showTralier"
			></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLRCB8.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLR9nf.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLQKw4.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLRFAg.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLRFAg.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLRFAg.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLRFAg.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLR9nf.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLR9nf.png" class="search-img"></image>
			<image src="https://s2.ax1x.com/2019/11/24/MLR9nf.png" class="search-img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyWord:''
			}
		},
		methods: {
			search(e){
				console.log(e.detail.value);
			},
			showTralier(e){
				// console.log(e.currentTarget);
				var trailerId=e.currentTarget.dataset.trailerid;
				uni.navigateTo({
					url:"../movie/movie?trailerId="+trailerId
				})
			}
		},
		onReachBottom() {
			
		}
	}
</script>

<style>
	@import url("search.css");
</style>
