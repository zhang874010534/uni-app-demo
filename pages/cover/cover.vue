<template>
	<view class="wrapper">
		<image :src="imgUrl" mode="widthFix"
		@longpress="actionSheet"
		></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:''
			}
		},
		methods: {
			actionSheet(){
				uni.showActionSheet({
					itemList:["下载","分享","你想干嘛就干嘛"]
				})
			}
		},
		onLoad(option) {
			this.imgUrl=option.imgUrl
			uni.setNavigationBarColor({
				frontColor:"#fff",
				backgroundColor:"#000"
			})
		}
	}
</script>

<style>
.wrapper{
	background-color: black;
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>
