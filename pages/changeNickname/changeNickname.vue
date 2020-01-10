<template>
	<view class="page">
		<form @submit="changeNickname">
			<view class="inputView">
				<input type="text" :value="userLogin.username" name="nickname" class="input" placeholder="请输入昵称" placeholder-style="color:#808080" />
			</view>
			<button type="primary" form-type="submit" class="button">Submit</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userLogin:{}
		};
	},
	onLoad() {
		this.userLogin=uni.getStorageSync('userLogin')
	},
	methods:{
		changeNickname(e){
			let name=e.detail.value.nickname
			this.userLogin.username=name
			uni.setStorageSync('userLogin',this.userLogin)
			uni.navigateBack({
				delta:1
			})
		}
	}
};
</script>

<style lang="scss">
	.inputView{
		background-color: #fff;
		width: 100%;
		padding-left: 30rpx;
		margin-top: 20rpx;
	}
	.input{
		width: 500rpx;
		height: 80rpx;
	}
	.button{
		width: 70%;
		margin-top: 30rpx;
	}
</style>
