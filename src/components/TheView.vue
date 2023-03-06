<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

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
			<hr class="my-4" />
			<!-- <LabelInput
				:model-value="username"
				@update:model-value="value => (username = value)"
			></LabelInput> -->

			<LabelInput v-model="username"></LabelInput>
		</div>
	</main>
</template>

<script>
	import { ref, reactive } from 'vue';
	import AppCard from './AppCard.vue';
	import PostCreate from './PostCreate.vue';
	import LabelInput from './LabelInput.vue';

	export default {
		components: {
			AppCard,
			PostCreate,
			LabelInput,
		},
		setup() {
			const contents = ref('내용');
			const username = ref('');
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
			// const createPost = (a, b, c, d) => {
			// 	console.log(a, b, c, d);
			// 	console.log('createPost');
			// };
			// const createPost = newTitle => {
			// 	console.log('createPost');
			// 	console.log(newTitle);
			// };
			const createPost = newPost => {
				console.log('createPost');
				console.log(newPost);
				posts.push(newPost);
			};
			return { contents, posts, toggleLike, createPost, username };
		},
	};
</script>

<style lang="scss" scoped></style>
