<template>
	<div class="row g-3">
		<!-- <button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, '김길동')"
		>
			button
		</button> -->
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">button</button>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		// emits: ['createPost'],
		emits: {
			// createPost: newTitle => {
			// 	console.log(`validator :`, newTitle);
			// 	if (!newTitle) {
			// 		return false; //이벤트는 그래도 발생함
			// 	}
			// 	return true;
			// },
			createPost: newPost => {
				console.log(`validator :`, newPost);
				if (!newPost.type) {
					return false; //이벤트는 그래도 발생함
				} else if (!newPost.title) {
					// return false;
					throw new Error('타이틀 작성해줘');
				}
				return true;
			},
		},
		// setup(_, context) {
		setup(_, { emit }) {
			const title = ref('');
			const type = ref('news');
			const createPost = () => {
				// context.emit('createPost', 1, 2, 3, '김길동');
				// emit('createPost', 1, 2, 3, '김길동');
				// emit('createPost', title.value);
				const newPost = {
					type: type.value,
					title: title.value,
				};
				console.log(title.value);
				emit('createPost', newPost);
				type.value = 'news';
				title.value = '';
			};
			return { createPost, title, type };
		},
	};
</script>

<style lang="scss" scoped></style>
