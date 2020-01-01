<template>
	<view class="container">
		<image class="chooseImg" :src="tempImgUrl" mode="aspectFit"></image>
		<view class="tipWords">*请从相册中选择等比宽高的图片噢~</view>
		<view class="choose-footer">
			<view class="footer-words" @click="Reselect">重新选择</view>
			<view class="footer-words" @click="upload">确认上传</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tempImgUrl: ''
		};
	},
	onLoad(params) {
		this.tempImgUrl = params.temp;
	},
	methods: {
		Reselect() {
			let that=this
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album','camera'], //从相册选择
				success: function(res) {
					that.tempImgUrl=res.tempFilePaths[0]
				}
			});
		},
		upload(){
			uni.showLoading({
				mask:true,
				title:'上传中，请稍候'
			})
			uni.uploadFile({
				url:'11',
				filePath:this.tempImgUrl,
				name:'file',
				// 将id和token传回后端 证明身份 这里是假的
				header:{
					headerId:'id',
					headerToken:'token'
				},
				success(res) {
					uni.showToast({
						title:'上传成功'
					})
				},
				fail() {
					uni.showToast({
						icon:'loading',
						title:'上传失败'
					})
				},
				complete(){
					uni.hideLoading()
				}
			})
		}
	}
};
</script>

<style lang="scss">
.container {
	width: 100%;
	height: 100%;
	background-color: #000;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	.chooseImg {
		width: 80%;
	}
	.tipWords {
		color: #808080;
	}
	.choose-footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		padding: 30rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		border-top: 2px solid #808080;
		.footer-words {
			color: #fff;
		}
	}
}
</style>
