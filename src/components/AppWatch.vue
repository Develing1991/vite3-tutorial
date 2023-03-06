<template>
	<div>{{ message }}</div>
</template>

<script>
	import { ref, watch } from 'vue';

	export default {
		setup() {
			const message = ref('Hello World');

			// message 데이터 변경에
			watch(message, (newValue, oldValue) => {
				console.log('newValue: ', newValue);
				console.log('oldValue: ', oldValue);
				// 어떠한 작업을 수행하는 "감시자" 역할을 합니다.
			});

			return {
				message,
			};
		},
	};
</script>

<style scoped></style>
