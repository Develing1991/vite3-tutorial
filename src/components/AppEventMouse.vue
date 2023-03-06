<template>
	<div>
		<div id="modify">
			<div @click.capture="clickDiv">
				Div
				<p @click.self="clickPtag">
					P
					<!-- p -->
					<!-- <span @click.stop="clickSpan"> span </span>
					<a href="https://www.naver.com" @click.stop.prevent="clickAtag"
						>aaaaa</a
					> -->
					<span @click="clickSpan"> span </span>
				</p>
			</div>
		</div>
		<button @click.once="clickSpan">click once</button>

		<div
			@scroll.passive="scrollEvent"
			style="max-height: 300px; overflow-y: auto"
		>
			<div style="height: 2000px">height 10000px</div>
		</div>
	</div>
</template>

<script>
	export default {
		setup() {
			const clickDiv = () => {
				console.log('clickDiv');
			};
			const clickPtag = () => {
				console.log('clickPtag');
			};
			const clickSpan = e => {
				//e.stopPropagation();
				console.log('clickSpan');
			};
			const clickAtag = () => {
				console.log('clickAtag');
			};

			const scrollEvent = () => {
				for (let i = 0; i < 50000; i++) {
					console.log(i);
				}
			};
			return {
				clickDiv,
				clickPtag,
				clickSpan,
				clickAtag,
				scrollEvent,
			};
		},
	};
</script>

<style scoped>
	#modify div,
	#modify p,
	#modify span {
		padding: 40px;
	}
	#modify div {
		background-color: #ccc;
	}
	#modify p {
		background-color: #999;
	}
	#modify span {
		background-color: #666;
		display: block;
	}
</style>
