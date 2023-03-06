<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<!-- p안에 h1으로 들어감 -->
		<p v-html="htmlStr"></p>
		<p v-pre>{{ msg }}</p>

		<!-- 최초 한번 업데이트성능  -->
		<p v-once>{{ msg }}</p>
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const msg = ref('안녕하세요');
			const htmlStr = ref('<h1>하잉</h1>');
			return { msg, htmlStr };
		},
	};
</script>

<style lang="scss" scoped></style>
