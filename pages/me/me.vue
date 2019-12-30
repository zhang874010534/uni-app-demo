<template>
	<view class="page">
		<view class="header">
			<image v-if="userIsLogin" :src="userObj.avatarUrl" class="face"></image>
			<image v-else src="https://s2.ax1x.com/2019/12/24/l949fK.png" class="face"></image>
			<view class="info-wrapper" v-if="userIsLogin">
				<view class="userName">{{ userObj.username }}</view>
				<view class="userId">ID:{{ userObj.id }}</view>
			</view>
			<view class="info-wrapper" v-else>
				<navigator url="../regist/regist"><view class="userName">注册/登录</view></navigator>
			</view>
			<view class="set-wrapper" v-if="userIsLogin">
				<navigator url="../meInfo/meInfo"><image src="../../static/me/setting.png" class="setting"></image></navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userIsLogin: false,
			userObj: {}
		};
	},
	onShow() {
		//检测本地是否有存储数据
		var userObj = uni.getStorageSync('userLogin');
		this.userObj = userObj;
		if (userObj != '' &&userObj!=undefined) {
			this.userIsLogin = true;
		}else{
			this.userIsLogin=false;
		}
	},
	methods: {}
};
</script>

<style lang="scss">
/* 头部部分开始 */
.header {
	background-color: #ffd350;
	width: 100%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	/* #ifdef MP */
	padding: 30rpx;
	/* #endif */
	.face {
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
	}
	.info-wrapper {
		display: flex;
		flex-direction: column;
		align-self: flex-start;
		padding-left: 20rpx;
		flex-grow: 1;
		.userName {
			font-size: 20px;
			color: #6a5018;
			font-weight: bold;
		}
		.userId {
			color: #a38e62;
			font-size: 14px;
			margin-top: 10rpx;
		}
	}

	.setting {
		width: 40rpx;
		height: 40rpx;
	}
}
/* 头部部分结束 */
</style>
