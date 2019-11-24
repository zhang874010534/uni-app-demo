<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item v-for="(item,i) in swiperList" :key="i">
				<image :src="item.imgSrc" class="swiper"></image>
			</swiper-item>
		</swiper>
		<!-- 热门电影 s -->
		<view class="page-block hot-movie">
			<view class="hot-wrapper">
				<image src="../../static/index/hot.png"></image>
				<view class="hot-title">
					热门电影
				</view>
			</view>
			<scroll-view scroll-x="true" class="page-block hot-swiper">
				<view class="hot-movie-content" v-for="(item,i) in movieList" :key="i">
					<view class="single-movie">
						<image :src="item.imgSrc" class="single-movie-img"></image>
						<view class="movie-name">
							{{item.name}}
						</view>
						<view class="movie-star">
							<image src="../../static/index/star.png" class="star-icon"></image>
							<image src="../../static/index/star.png" class="star-icon"></image>
							<image src="../../static/index/star.png" class="star-icon"></image>
							<image src="../../static/index/star.png" class="star-icon"></image>
							<image src="../../static/index/star1.png" class="star-icon"></image>
							<view class="star-score">
								8.2分
							</view>
						</view>
					</view>
				</view>
				
				
			</scroll-view>
		</view>
		<!-- 热门电影 e -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				swiperList:[],
				movieList:[]
			}
		},
		onLoad() { 
			uni.request({
			    url:  this.$defaultUrl+'/pages.json', //仅为示例，并非真实接口地址。
				method:'GET', 
			    success: (res) => {
			        this.swiperList=res.data.data;
			    }
			});
			uni.request({
			    url:  this.$defaultUrl+'/index/movie.json', //仅为示例，并非真实接口地址。
				method:'GET',
			    success: (res) => {
			        this.movieList=res.data.data;
			    }
			});
		},
		methods: {

		}
	}
</script>

<style>
	@import url("index.css");
</style>
