<template>
	<main>
		<div class="container py-4">
			<div class="row g-5">
				<div class="col col-4">
					<AppCard title="제목" :contents="contents"></AppCard>
				</div>
				<div v-for="item in posts" :key="item.title" class="col col-4">
					<AppCard
						:title="item.title"
						:contents="item.contents"
						:type="item.type"
						:is-like="item.isLike"
						@toggleLike="toggleLike(item)"
					></AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import { ref, reactive } from 'vue';
	import AppCard from './AppCard.vue';

	export default {
		components: {
			AppCard,
		},
		setup() {
			const contents = ref('내용');
			const posts = reactive([
				{ title: '제목', contents: '내용1', type: 'news', isLike: true },
				{ title: '제목2', contents: '내용2', type: 'notice', isLike: true },
				{ title: '제목3', contents: '내용3', type: 'news', isLike: false },
				{ title: '제목4', contents: '내용4', type: 'notice', isLike: true },
				{ title: '제목5', contents: '내용5', type: 'news', isLike: false },
			]);
			const toggleLike = item => {
				item.isLike = !item.isLike;
			};
			return { contents, posts, toggleLike };
		},
	};
</script>

<style lang="scss" scoped></style>
