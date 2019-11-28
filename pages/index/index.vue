<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item v-for="(item,i) in swiperList" :key="i">
				<image :src="item.imgSrc" mode="aspectFill" class="swiper"></image>
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
					<star :fatherScore="item.score" class="star-center"></star>
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
		<view class="guess-single page-block">
			<image src="https://s2.ax1x.com/2019/11/24/MLQKw4.png" class="guess-img"></image>
			<view class="guess-content">
				<view class="guess-title">
					罗小黑战记
				</view>
				<star fatherScore="8.2"></star>
				<view class="guess-info">
					2019/冒险/动画/奇幻
				</view>
				<view class="guess-info">
					山新/刘明月/郝祥海/夏侯落枫/叮当/图特哈蒙
				</view>
			</view>
			<view class="guess-praise" @click="praise(0)">
				<image src="../../static/index/praise.png" class="praise-icon"></image>
				<view class="praise-name">
					点赞
				</view>
				<view :animation="animationData[0]" class="praise-name praise-animation">
					+1
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
				trailerList:[],
				animation1:{},
				animationData:[]
			}
		},
		onLoad() { 
			
			//设置导航栏的颜色
			// #ifdef APP-PLUS
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#000000"
			})
			// #endif
			
			
			//创建一个animation动画实例对象
			this.animation=uni.createAnimation({
				
			})
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
		onPullDownRefresh() {
			this.refresh()
		},
		methods: {
			refresh(){
				uni.showLoading({
					mask:true
				})
				uni.showNavigationBarLoading()
				//刷新页面获取热门预告
				uni.request({
				    url:  this.$defaultUrl+'/index/trailer.json', //仅为示例，并非真实接口地址。
					method:'GET',
				    success: (res) => {
				        this.trailerList=res.data.data;
				    },
					complete() {
						uni.stopPullDownRefresh()
						uni.hideLoading()
						uni.hideNavigationBarLoading()
					}
				});
			},
			praise(i){
				// step 可以传入一个跟 uni.createAnimation() 
				// 一样的配置参数用于指定当前组动画的配置。
				this.animation.translateY(-60).opacity(1).step({
					duration:400
				})
				//直接这样子不行 一定要经过animaition1
				// this.animationData[i]=this.animation.export();
				this.animation1=this.animation;
				this.animationData[i]=this.animation1.export();
				setTimeout(()=>{
					this.animation.translateY(0).opacity(0).step({
						duration:0
					});
					this.animationData[i]=this.animation.export();
				}, 500);
			}
		},
		components:{
			star
		}
	}
</script>

<style>
	@import url("index.css");
</style>
