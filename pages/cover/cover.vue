<template>
	<view class="wrapper"><image :src="imgUrl" mode="widthFix" @longpress="actionSheet"></image></view>
</template>

<script>
export default {
	data() {
		return {
			imgUrl: ''
		};
	},
	methods: {
		actionSheet() {
			var that = this;
			uni.showActionSheet({
				itemList: ['保存图片到本地', '分享', '你想干嘛就干嘛'],
				success(res) {
					// console.log(res);
					if (res.tapIndex == 0) {
						uni.showLoading({
							title: '图片保存中'
						});
						uni.downloadFile({
							url: that.imgUrl,
							success(res) {
								//这是临时的文件路径
								// console.log(res.tempFilePath);
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success() {
										uni.showToast({
											title: '保存成功',
											duration: 2000
										});
									},
									complete() {
										uni.hideLoading();
									}
								});
							}
						});
					}
				}
			});
		}
	},
	onNavigationBarButtonTap(e) {
		if(e.type=="share"){
			uni.share({
			    provider: "weixin",
			    scene: "WXSceneSession",
			    type: 0,
			    href: "http://uniapp.dcloud.io/",
			    title: "uni-app分享",
			    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
			    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
		}
	},
	onLoad(option) {
		this.imgUrl = option.imgUrl;
		uni.setNavigationBarColor({
			frontColor: '#fff',
			backgroundColor: '#000'
		});
	}
};
</script>

<style>
.wrapper {
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
