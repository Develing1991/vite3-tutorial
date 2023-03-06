<template>
	<div class="card">
		<div class="card-body">
			{{ $props }}
			<!-- <span class="badge bg-secondary">
				{{ type === 'news' ? '뉴스' : '공지사항' }}
			</span> -->
			<span class="badge bg-secondary">
				{{ typeName }}
			</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
			<a v-else href="#" class="btn btn-primary">좋아요</a> -->
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue';

	export default {
		// props: ['title', 'contents'],
		props: {
			type: {
				type: String,
				default: 'news',
				validator: value => {
					return ['news', 'notice'].includes(value);
				},
			},
			title: {
				type: String,
				required: true,
			},
			contents: {
				type: String,
				required: true,
			},
			isLike: {
				type: Boolean,
				required: false,
			},
			obj: {
				type: Object,
				default: () => ({}),
			},
		},
		emits: ['toggleLike'],
		setup(props, context) {
			console.log(props.title);

			const isLikeClass = computed(() => {
				return props.isLike ? 'btn-danger' : 'btn-primary';
			});
			const typeName = computed(() =>
				props.type === 'new' ? '뉴스' : '공지사항',
			);
			const toggleLike = () => {
				context.emit('toggleLike');
			};
			return { isLikeClass, typeName, toggleLike };
		},
	};
</script>

<style lang="scss" scoped></style>
