<template>
	<div>
		<ul v-for="(item, index) in itemsArray" :key="item.id">
			<li v-if="item.id % 2 == 0">{{ item.message }} - {{ index }}</li>
		</ul>
		<!-- key, value 반대 -->
		<ul v-for="(value, key, index) in itemsObject" :key="key">
			<li>{{ key }} - {{ value }} - {{ index }}</li>
		</ul>
	</div>
</template>

<script>
	import { reactive } from 'vue';

	export default {
		setup() {
			const itemsArray = reactive([
				{ id: 1, message: 'Java' },
				{ id: 2, message: 'HTML' },
				{ id: 3, message: 'CSS' },
				{ id: 4, message: 'JavaScript' },
			]);
			const itemsObject = reactive({
				title: '제목입니다.',
				author: '홍길동',
				publishedAt: '2019-07-08',
			});
			return {
				itemsArray,
				itemsObject,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
