<template>
	<div>
		<p>{{ author }}</p>
		<p>{{ title }}</p>
		<p>{{ year }}</p>
		<p>{{ price }}</p>
		<p>{{ description }}</p>
	</div>
</template>

<script>
	import { reactive, toRefs, toRef } from 'vue';

	export default {
		setup() {
			const book = reactive({
				author: 'Vue Team',
				year: '2020',
				title: 'Vue 3 Guide',
				description: '당신은 이 책을 지금 바로 읽습니다 ;)',
				price: '무료',
			});
			// 구조분해시 재할당 된것이라 반응성을 잃어버림
			// 어떻게 보면 ... 당연한 말
			const { author, year } = book;
			// toRefs 구조분해 할당도 반응형 유지시켜줌
			const { title, description } = toRefs(book);
			// toRef 구조분해 할당 한 개  반응형 유지
			const { price } = toRef(book, 'price');
			return { author, year, title, description, price };
		},
	};
</script>

<style lang="scss" scoped></style>
