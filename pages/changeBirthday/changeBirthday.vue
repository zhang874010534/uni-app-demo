<template>
	<view class="page">
		<form @submit="submitBirthday">
			<view class="inputView">
				<picker mode="date" @change="changeBirthday">
					<view class="birthday">{{birthday}}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="button">Submit</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userLogin:{},
			birthday:''
		};
	},
	onLoad() {
		this.userLogin=uni.getStorageSync('userLogin')
		this.birthday=this.userLogin.birthday
	},
	methods:{
		submitBirthday(e){
			this.userLogin.birthday=this.birthday
			uni.setStorageSync('userLogin',this.userLogin)
			uni.navigateBack({
				delta:1
			})
		},
		changeBirthday(e){
			this.birthday=e.detail.value
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
	.birthday{
		height: 80rpx;
	}
	.button{
		width: 70%;
		margin-top: 30rpx;
	}
</style>
