<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item v-for="(item,i) in swiperList" :key="i">
				<image :src="item.imgSrc" class="swiper"></image>
			</swiper-item>
		</swiper>
		<!--  热门电影 s -->
		<view class="page-block hot-movie">
			<view class="hot-wrapper">
				<image src="../../static/index/hot.png"></image>
				<view class="hot-title">
					热门电影
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block hot-swiper">
			<view class="hot-movie-content" v-for="(item,i) in movieList" :key="i">
				<view class="single-movie">
					<image :src="item.imgSrc" class="single-movie-img"></image>
					<view class="movie-name">
						{{item.name}}
					</view>
					<star :fatherScore="item.score"></star>
				</view>
			</view>
		</scroll-view>
		<!-- 热门电影 e -->
		
		
		<!-- 热门预告 s -->
		<view class="page-block hot-movie">
			<view class="hot-wrapper">
				<image src="../../static/index/trailer.png"></image>
				<view class="hot-title">
					热门预告
				</view>
			</view>
		</view>
		<view class="page-block hot-trailer">
			<video v-for="(item,i) in trailerList" :key="i" 
			:src="item.video" controls
			class="hot-trailer-single"
			>
				
			</video>
		</view>
		<!-- 热门预告 e -->
		
		
		<!-- 猜你喜欢s -->
		<view class="page-block hot-movie">
			<view class="hot-wrapper">
				<image src="../../static/index/guess.png"></image>
				<view class="hot-title">
					猜你喜欢
				</view>
			</view>
		</view>
		<view class="guess-single">
			<image src="https://s2.ax1x.com/2019/11/24/MLQKw4.png" class="guess-img"></image>
			<view class="guess-content">
				<view class="guess-title">
					罗小黑战记
				</view>
				<star fatherScore="9.2"></star>
				<view class="guess-info">
					2019/冒险/动画/奇幻
				</view>
				<view class="guess-info">
					山新/刘明月/郝祥海/夏侯落枫/叮当/图特哈蒙
				</view>
			</view>
			<view class="guess-praise">
				<image src="../../static/index/praise.png" class="praise-icon"></image>
				<view class="praise-name">
					点赞
				</view>
			</view>
		</view>
		<!-- 猜你喜欢e -->
	</view>
</template>

<script>
	import star from '../../components/star.vue'
	export default {
		data() {
			return {
				swiperList:[],
				movieList:[],
				trailerList:[]
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
			// 热门电影
			uni.request({
			    url:  this.$defaultUrl+'/index/movie.json', //仅为示例，并非真实接口地址。
				method:'GET',
			    success: (res) => {
			        this.movieList=res.data.data;
			    }
			});
			
			//热门预告
			uni.request({
			    url:  this.$defaultUrl+'/index/trailer.json', //仅为示例，并非真实接口地址。
				method:'GET',
			    success: (res) => {
			        this.trailerList=res.data.data;
			    }
			});
		},
		methods: {

		},
		components:{
			star
		}
	}
</script>

<style>
	@import url("index.css");
</style>
