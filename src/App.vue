<template>
	<div>
		{{ count }}
		{{ message }}

		<button @click="increase">+++++</button>
	</div>
</template>

<script>
	import { onMounted, ref } from 'vue';

	export default {
		mounted() {
			console.log('어느게 먼저? options mounted');
		},
		setup() {
			const count = ref(0);
			const message = ref('hello');
			const increase = () => {
				count.value++;
			};
			onMounted(() => {
				console.log('어느게 먼저? composition mounted'); // 컴포지션이 먼저 실행 됨
			});
			return {
				count,
				message,
				increase,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
