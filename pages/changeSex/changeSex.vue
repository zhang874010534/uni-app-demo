<template>
	<view class="page">
		<form @submit="changeSex">
			<radio-group class="radioSex" @change="changeRadio">
				<label class="radio">
					<radio value="男" :checked="sex=='男'" /><text>男</text>
				</label>
				<label class="radio">
					<radio value="女" :checked="sex=='女'" /><text>女</text>
				</label>
			</radio-group>
			<button type="primary" form-type="submit" class="button">Submit</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userLogin:{},
			sex:''
		};
	},
	onLoad() {
		this.userLogin=uni.getStorageSync('userLogin')
		this.sex=this.userLogin.sex
	},
	methods:{
		changeSex(){
			uni.setStorageSync('userLogin',this.userLogin)
			uni.navigateBack({
				delta:1
			})
		},
		changeRadio(e){
			this.userLogin.sex=e.detail.value
		}
	}
};
</script>

<style lang="scss">
	.radioSex{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		.radio{
			padding: 20rpx 10rpx;
		}
	}
	.button{
		width: 70%;
		margin-top: 30rpx;
	}
</style>
