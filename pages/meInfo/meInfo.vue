<template>
	<view class="page">
		<view class="header-wrap">
			<!-- 头像 -->
			<view @click="operator" class="single-header" >
				<view class="words">
					头像
				</view>
				<image class="portrait" :src="userObj.avatarUrl" mode=""></image>
				<image class="arrow" src="../../static/meInfo/arrow.png" mode=""></image>
			</view>
			<!-- 昵称 -->
			<view class="single-header">
				<view class="words">
					昵称
				</view>
				<view class="right-words">
					{{userObj.username}}
				</view>
				<image class="arrow" src="../../static/meInfo/arrow.png" mode=""></image>
			</view>
			<!-- 生日 -->
			<view class="single-header">
				<view class="words">
					生日
				</view>
				<view class="right-words">
					2222-01-01
				</view>
				<image class="arrow" src="../../static/meInfo/arrow.png" mode=""></image>
			</view>
			<!-- 性别 -->
			<view class="single-header clear-bottom">
				<view class="words">
					性别
				</view>
				<view class="right-words">
					男
				</view>
				<image class="arrow" src="../../static/meInfo/arrow.png" mode=""></image>
			</view>
		</view>
		<!-- 底部开始 -->
		<view class="footer">
			<view class="footer-words" @click="clearStorage">
				清理缓存
			</view>
			<view class="footer-words">
				退出登录
			</view>
		</view>
		<!-- 底部结束 -->
		<!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userObj:{}
			};
		},
		onShow(){
			this.userObj=uni.getStorageSync('userLogin')
		},
		methods:{
			clearStorage(){
				uni.clearStorage()
				uni.showLoading({
					title:'清理中'
				})
				setTimeout(function () {
				    uni.hideLoading();
				}, 1500);
			},
			operator(){
				let that=this
				uni.showActionSheet({
					itemList:['查看我的头像','从相册中选择上传'],
					success(e) {
						let index=e.tapIndex
						//如果点击了查看头像
						if(index==0){
							let imgArr=[];
							imgArr.push(that.userObj.avatarUrl)
							uni.previewImage({
								urls:imgArr,
								current:imgArr[0]
							})
						}else if(index==1){
							// uni.chooseImage({
							// 	count:1,
							// 	sizeType:['compressed'],
							// 	sourceType:['album','camera'],
							// 	success(e) {
							// 		let temp=e.tempFilePaths[0];
							// 		uni.navigateTo({
							// 			url:'../cropper/cropper?temp='+temp
							// 		})
							// 	}
							// })
							uni.navigateTo({
								url:'../cropper/cropper'
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.header-wrap{
		background-color: #fff;
		padding: 0 20rpx;
		margin-top: 15rpx;
		.single-header{
			display: flex;
			align-items: center;
			padding: 20rpx 5rpx;
			border-bottom: 1px solid #dfdfdf;
			.words{
				color: #333333;
				flex-grow: 1;
			}
			.portrait{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
			.right-words{
				font-size: 14px;
				line-height: 40rpx;
				color: #bfbfbf;
			}
			.arrow{
				width: 40rpx;
				height: 40rpx;
			}
		}
		// 清除下边框
		.clear-bottom{
			border-bottom: 0;
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		.footer-words{
			text-align: center;
			background-color: #fff;
			line-height: 100rpx;
			color: #333333;
			margin-top: 5rpx;
		}
	}
</style>
