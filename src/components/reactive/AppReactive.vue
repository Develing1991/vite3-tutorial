<template>
	<div>
		<button @click="increase">click {{ state.count }}</button>
		<button @click="increase">deep click {{ state.deep.count }}</button>
	</div>
</template>

<script>
	import { reactive } from 'vue';

	export default {
		setup() {
			// 레퍼런스 타입 반응형
			const state = reactive({
				count: 0,
				deep: {
					count: 0,
				},
			});
			const increase = () => {
				state.count++;
				state.deep.count++;
			};
			return {
				state,
				increase,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
