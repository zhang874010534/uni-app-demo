<template>
	<view class="container">
		<form @submit="formSubmit">
			<view class="portrait"><image src="https://s2.ax1x.com/2019/12/24/l949fK.png" mode=""></image></view>
			<view class="info-wrapper">
				<label for="" class="lb-color">帐号</label>
				<input name="username" class="info-input" type="text" placeholder="请输入用户名" />
			</view>
			<view class="info-wrapper">
				<label for="" class="lb-color">密码</label>
				<input name="password" class="info-input" type="text" placeholder="请输入密码" password="true" />
			</view>
			<button type="primary" form-type="submit" class="regist-bt">注册/登录</button>
		</form>
		<!-- 第三方登陆开始 -->
		<view class="third-login">
			<view class="third-words">
				<view class="line"></view>
				<view class="login-words">第三方帐号登陆</view>
				<view class="line"></view>
			</view>
			<view class="third-image">
				<!-- #ifdef APP-PLUS -->
				<button @click="appOAuth('weixin')" class="third-button">
					<image class="login-icon" src="../../static/me/wechat.png" mode=""></image>
				</button>
				<button @click="appOAuth('qq')" class="third-button">
					<image class="login-icon" src="../../static/me/qq.png" mode=""></image>
				</button>
				<!-- #endif -->
				<!-- #ifdef MP -->
				<button open-type="getUserInfo" @getuserinfo="wxLogin" class="third-button">
					<image class="login-icon" src="../../static/me/wechat.png" mode=""></image>
				</button><button class="third-button">
					<image class="login-icon" src="../../static/me/qq.png" mode=""></image>
				</button>
				<!-- #endif -->
			</view>
		</view>
		<!-- 第三方登陆结束 -->
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		formSubmit(e) {
			let username = e.detail.value.username;
			let password = e.detail.value.password;
			let userObj = {
				username: username,
				password: password,
				id: '123ddg666',
				sex:'未选择',
				birthday:'2022-02-02',
			};
			//用同步也没啥关系
			uni.setStorageSync('userLogin', userObj);
			uni.switchTab({
				url: '../me/me'
			});
		},
		wxLogin(e){
			let userInfo=e.detail.userInfo
			console.log(e);
			uni.login({
				provider:'weixin',
				success(response) {
					let code=response.code
					let userObj = {
						username: userInfo.nickName,
						id: code.slice(0,10),
						avatarUrl:userInfo.avatarUrl,
						birthday:'2022-02-02',
						sex:'未选择'
					};
					uni.setStorageSync('userLogin', userObj);
					uni.switchTab({
						url:'../me/me'
					})
				}
			})
		},
		appOAuth(provider){
			uni.login({
				provider:provider,
				success(e) {
					uni.getUserInfo({
						provider:provider,
						success(info) {
							console.log(info);
						}
					})
				}
			})
		}
	}
};
</script>

<style lang="scss">
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	.portrait {
		display: flex;
		justify-content: center;
		margin: 70rpx 0;
		image {
			width: 110rpx;
			height: 110rpx;
		}
	}
	.info-wrapper {
		display: flex;
		border-bottom: 1px solid #dbdbda;
		padding: 20rpx;
		padding-bottom: 20rpx;
		.lb-color {
			color: #808080;
		}
		.info-input {
			width: 500rpx;
			margin-left: 40rpx;
		}
	}
	.regist-bt {
		width: 75%;
		margin-top: 60rpx;
		background-color: skyblue;
	}
	// 第三方登陆
	.third-login {
		width: 100%;
		.third-words {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			align-items: center;
			padding: 60rpx 80rpx;
			.line {
				height: 1px;
				border-bottom: 1px solid #c7c7c7;
				flex-grow: 1;
			}
			.login-words {
				flex-shrink: 0;
				color: #8a8a8a;
			}
		}
		.third-image {
			display: flex;
			justify-content: center;
			.third-button {
				margin: 0 10rpx 0;
				padding: 0;
				width: 80rpx;
				height: 80rpx;
				background-color: #fff;
			}
			.third-button::after{
				border: 0;
			}
			.login-icon {
				width: 80rpx;
				height: 80rpx;
			}
		}
	}
}
</style>
