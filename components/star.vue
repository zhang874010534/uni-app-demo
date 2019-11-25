
<template>
	<view class="movie-star">
		<image v-for="(item,i) in starNum" :key="i" src="../static/index/star.png" class="star-icon"></image>
		<image v-for="(item,i) in grayNum" :key="i" src="../static/index/star1.png" class="star-icon"></image>
		<view class="star-score">
			{{score}}分
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				starNum:0,
				grayNum:5,
				score:'0'
			};
		},
		props:{
			fatherScore:0
		},
		created(){
			this.score=this.fatherScore
			this.starNum=parseInt(this.fatherScore/2)
			this.grayNum=5-this.starNum
		}
	}
</script>

<style>
.movie-star{
	display: flex;
	justify-content: center;
}
.star-icon{
	width: 20rpx;
	height: 20rpx;
	margin-top: 6rpx;
}
.star-score{
	font-size:12px;
	color: #bfbfbf;
	margin-left: 6rpx;
}
</style>
