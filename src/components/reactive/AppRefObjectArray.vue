<template>
	<div></div>
</template>

<script>
	import { ref, reactive } from 'vue';

	export default {
		setup() {
			// ref - Object
			// ref를 reactive에 넣어서 사용하기
			const count = ref(0);
			const state = reactive({
				count,
			});
			count.value++;
			count.value++;
			console.log(count.value); // 2
			//console.log(state.count.value); // undefined
			console.log(state.count); // 2 자동 언랩핑 객체에서 ref를 사용할 땐 .value가 언랩핑

			// ref - Array
			const message = ref('hello');
			const arr = reactive([message]); // [RefImple, RefImple, RefImple]
			console.log(arr[0]); // RefImpl...
			console.log(arr[0].value); // hello  배열에서 ref를 사용할 땐 .value를 붙여야 함

			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
