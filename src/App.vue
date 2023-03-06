<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button @click="addReactiveMessage">메시지 추가</button>
		<p>{{ normalMessage }}</p>
		<button @click="addNormalMessage">메시지 추가</button>
	</div>
</template>

<script>
	import { onBeforeMount, onMounted, ref, isRef } from 'vue';

	// 논리적 관심사 컴포저블
	export default {
		setup() {
			console.log('setup()');
			const reactiveMessage = ref('hello');
			const addReactiveMessage = () => {
				reactiveMessage.value = reactiveMessage.value + '!';
			};
			let normalMessage = 'hello';
			const addNormalMessage = () => {
				normalMessage = normalMessage + '!';
			};
			console.log(isRef(reactiveMessage));
			console.log(isRef(normalMessage));

			onMounted(() => {
				console.log('onMounted');
			});
			onBeforeMount(() => {
				console.log('onBeforeMount');
			});
			return {
				reactiveMessage,
				normalMessage,
				addReactiveMessage,
				addNormalMessage,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
